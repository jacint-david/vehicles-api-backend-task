# Vehicles API - Backend Task - Jacint M. David
This is a simple API that reads from a preseeded database table and returns all the rows in JSON format using Express and Sequelize.

## Setup:

## Linux:

1. Clone GitHub Repo onto your local machine and enter folder
2. Check if you have PostgreSQL installed by using command ```psql --version```, if you do then skip to step 5 otherwise continue to the next step
3. Download PostgreSQL by using command ```sudo apt-get install postgresql postgresql-contrib```
4. Repeat step 2 to confirm that the installation was successfull (you should see a version number)
5. Open psql interface by using command ```sudo -u postgres psql``` and enter your superuser password
6. Create new user by using command ```CREATE USER motorway WITH PASSWORD 'thisIsTheWay' CREATEDB;``` 
8. Open new terminal window, navigate to project folder
9. Install packages by using command ```npm i``` this should download all the dependencies
10. Create database (motorway_db), table (vehicles), seed it with dummy data about vehicles and start running API server by using script ```npm run setup```

Hint: If you have stopped the server, you can just restart it by using ```npm run start```


## Mac and Windows:
Please see these links for popular installation guides:
- https://www.postgresql.org/download/ (download links) 
- https://youtu.be/qw--VYLpxG4?t=654 (video guide link)
- you can install postgres in any way you see fit as long as you manage to create user "motorway" with password "thisIsTheWay" with authority to create tables and databases the code should work

Tip: Once you seeded the database you can use ```npm run start``` instead of ```npm run setup``` when you are restarting the server

## Test
1. Test that the database has been seeded by reopening the terminal window where you are logged into psql:
    - Change to database motorway_db from the default one by using command ```\c motorway_db```
    - Run sql query ```SELECT * FROM motorway_db;```
    - You should see some records with columns: id, make, model, createdAt, updatedAt
2. Test API endpoints are working as expected:
    - Open browser or Postman (if you use Postman, make sure to select 'GET' as the method)
    - Type in URL [```localhost:3000```](http://localhost:3000/) and press enter to get the instructions
    - Type in URL [```localhost:3000/api/v1/vehicles```](http://localhost:3000/api/v1/vehicles) and press enter to get all the records from table "vehicles" from database "motorway_db"
    - Type in URL [```localhost:3000/anything-you-want```](http://localhost:3000/anything-you-want) and press enter to be redirected to the instructions path

## Troubleshooting and Additional Information
- If you have issues with the installation steps these sources might help:
    1. https://syllabus.codeyourfuture.io/db/prep (website)
    2. https://youtu.be/qw--VYLpxG4?t=654 (video)
- If you have trouble logging into psql use command ```sudo -u postgres psql``` and enter your superuser password (it logs you in as superuser)
- You can use other users if you can't create the motorway one for some reason, but make sure to adjust the code in config.js and connection.js accordingly
- If you have any questions, feel free to get in touch


## Postman

1. Returning all the rows of vehicles data upon making a GET request to /api/v1/vehicles
![GET_ALL_VEHICLES](https://user-images.githubusercontent.com/89414746/169159660-a1551cf2-e718-4dd1-a539-db0f88b4c6cc.png)

2. Returning instructions on how to reach the API endpoint upon making a GET request to /
![GET_INSTRUCTIONS](https://user-images.githubusercontent.com/89414746/169160045-65beb9fc-f71a-404b-b83c-0d0a12e25817.png)

3. Redirecting to / upon making a GET request to all other URLs
![REDIRECT](https://user-images.githubusercontent.com/89414746/169160162-1c226944-6bbf-45ec-8f7a-03939b669023.png)
