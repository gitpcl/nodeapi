const express = require ('express');
const cors = require ('cors');
const mongoose = require ('mongoose');
const requireDir = require ('require-dir');

// Starting the app
const app = express();
app.use(express.json())
app.use(cors())

// Starting the DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true , useUnifiedTopology: true })

requireDir('./src/models')

const Product = mongoose.model('Product')

//Routes
app.use('/api', require('./src/routes'))

app.listen(3001);