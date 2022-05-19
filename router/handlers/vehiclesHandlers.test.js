const {getAllVehicles, getInstructions, redirect} = require("./vehiclesHandlers");

// HANDLERS TEST SUITE
describe('Test Handlers', () => {

    // GET INSTRUCTIONS
    test('responds to /', () => {
        const req = {};
        const res = {
            text: '',
            send(textToSend) {
                this.text = textToSend
            }
        };
        getInstructions(req, res);
        expect(res.text).toEqual("Use the '/api/v1/vehicles' path to interact with the Vehicles API");
    });

    // REDIRECT HANDLER
    test('responds to /invalid by redirecting to /', () => {
        const req = {};
        const res = {
            redirectTo: '',
            redirect(path) {
                this.redirectTo = path;
            }
        };
        redirect(req, res);
        expect(res.redirectTo).toEqual('/');
    });
});