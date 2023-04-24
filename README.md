# Mobilics_Assignment
I have created NodeJS And ReactJS Application by fetching the data from json file and stored it in Mongo Cloud platform. I have performed some operations on the database to extract information from it and reflected to frontend(ReactJS).Worked with accessing API'S Faster than usual .

Tech Stack used:

Backend:NodeJS,ExpressJS

Frontend:ReactJS

DataBase:MongoDB Cloud


                                                  Home Page
![image](https://user-images.githubusercontent.com/86468467/234090077-19d99383-2105-4410-b5d8-92d5ed68cd5c.png)

                                           MongoDB Cloud Storage
![image](https://user-images.githubusercontent.com/86468467/234090543-be27f163-5a47-45c1-adc7-33a0f4cbd55a.png)

                                          Working Environment : API END POINTS
![image](https://user-images.githubusercontent.com/86468467/234091585-b7c27310-3d05-4ed3-a7f0-5266e5de8411.png)

                                            Fetched Information from backend api localhost:5000/users/bmw-mercedes-income/
![image](https://user-images.githubusercontent.com/86468467/234091850-f98b9550-ac3c-4093-bff0-ac83be079fc4.png)


![image](https://user-images.githubusercontent.com/86468467/234092238-28f4861c-cfdb-479d-bf87-be734f793943.png)


Explanation of Source Code:

Storing sample_data.json in MongoDB Cloud:
The sample_data.json file is stored in MongoDB Cloud by first creating a new database and collection. Then, the data from the sample_data.json file is inserted into the collection using the Mongoose library's insertMany method.

API Used:
The API used in this project is the Node.js backend with the Express.js framework and the MongoDB database. Express.js is a popular Node.js framework used for building web applications and APIs. MongoDB is a NoSQL database used for storing and retrieving data. The Mongoose library is used as an ORM (Object-Relational Mapping) tool to work with MongoDB.

Creating Backend Routes, Controllers, and Models:
Backend routes are used to handle HTTP requests from the frontend and to retrieve data from the database. In this project, I used GET route is used to retrieve data from the database, while the POST route is used to add new data to the database.

The controllers handle the business logic for each route. For example, the GET route controller retrieves data from the database and sends it back to the frontend in JSON format. The POST route controller receives new data from the frontend, validates it, and adds it to the database.

The models define the structure of the data in the database. In this project, there is only one model, which defines the structure of the sample_data collection.

Storing Data in the Frontend:
The frontend stores the data extracted from the backend in a state variable using the useState hook provided by React. When the data is retrieved from the backend, it is stored in the state variable, which triggers a re-render of the component displaying the data. The data can also be manipulated in the frontend and sent back to the backend using the POST route.

In conclusion, this project uses the Node.js backend with the Express.js framework and MongoDB database to store and retrieve data. The sample_data.json file is stored in MongoDB Cloud, and the Mongoose library is used to work with the database. The backend routes, controllers, and models handle HTTP requests and database interactions. The frontend stores the data extracted from the backend using the useState hook and can manipulate and send the data back to the backend using the POST route.
