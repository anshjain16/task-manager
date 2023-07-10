const connectDB = require('./db/connection');
const express = require('express');
const app = express();
const router = require('./routes/tasks')
require('dotenv').config();
const notFound = require('./middleware/not-found');
// middleware
app.use(express.json());

// static files
app.use(express.static('./public'));

// router
app.use('/api/v1/tasks', router);

console.log('Task Manager App')
app.get('*', notFound)

const port = process.env.PORT || 3000
connectDB(process.env.MONGO_URI)
.then(function() {
    app.listen(port, function () {
        console.log(`Server is up and running on port ${port}`);    
    })
})
.catch(function(err) {
    console.log(err);
})


