const request = require('supertest');
const express = require('express');
const vehiclesRouter = require('./vehiclesRouter');
const db = require('../database/models/index');

const app = new express;
app.use('/', vehiclesRouter);

// ROUTES TEST SUITE
describe('Testing Routes', () => {
    // TESTING GET INSTRUCTIONS RESPONSE
    test('responds to /', async () => {
        const res = await request(app).get('/');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res.text).toEqual("Use the '/api/v1/vehicles' path to interact with the Vehicles API");
    });
    // TESTING REDIRECT
    test('responds to /invalid by redirecting to /', async () => {
        const res = await request(app).get('/any-other-path');
        expect(res.header['content-type']).toBe('text/plain; charset=utf-8');
        expect(res.statusCode).toBe(302);
        expect(res.text).toEqual("Found. Redirecting to /");
    });
    // TESTING GET ALL VEHICLES (seeded records)
    test('responds to /api/v1/vehicles', async () => {
        const res = await request(app).get('/api/v1/vehicles');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
        const vehicles = await db.Vehicle.findAll();
        expect(vehicles[0]['make']).toEqual('Renault');
    })
})
