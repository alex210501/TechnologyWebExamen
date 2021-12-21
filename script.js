// Import express
let express = require('express');

// Initialize the app
let app = express();

// Add the /public directory
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));

// Import router
let router = require('./routes');
app.use('/', router);

// Create port
let port = 80;

// Listen to the specified port
app.listen(port, () => {
    console.log('Running on port ' + port);
});

