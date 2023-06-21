// Load env variables 
require("dotenv").config(); 


// Import dependencies
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require("./config/connectToDb");
const propsController = require("./controllers/propsController");
const usersController = require("./controllers/usersController");
const adminController = require("./controllers/adminController");
const requireAuth = require("./middleware/requireAuth");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yml');


// Create an express app
const app = express();


// Configure express app
app.use(express.json( { limit: "50mb" } ));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: ['https://cohc.onrender.com', 'https://cohc-server.onrender.com',
  'http://cohc.onrender.com', 'http://cohc-server.onrender.com',
  'http://localhost:3000', 'http://localhost:3009',
  'http://localhost:3001', 'http://localhost:3002',
  'http://cohc-server:10000', 'https://cohc-server:10000'],
  credentials: true, // enable set cookie
}));


// Connect to database
connectToDb();


// API Routing
app.post('/signup', usersController.signup);
app.post('/login', usersController.login);
app.post('/logout', usersController.logout);
app.get('/check-auth', requireAuth, usersController.checkAuth);
app.get('/user', requireAuth, usersController.fetchUser);
app.get('/allUsers', requireAuth, adminController.fetchAllUsers);
app.delete("/users/:id", requireAuth, adminController.deleteUser);
app.get('/admin', requireAuth, usersController.fetchUser);
app.get("/props", requireAuth, propsController.fetchProps);
app.get("/props/:id", requireAuth, propsController.fetchProp);
app.post("/props", requireAuth, propsController.createProp);
app.put("/props/:id", requireAuth, propsController.updateProp);
app.delete("/props/:id", requireAuth, propsController.deleteProp);


// Swagger API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Start our server
const port = process.env.PORT || 3009;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});  

