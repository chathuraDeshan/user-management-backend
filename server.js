const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router')

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://deshanC:deshan24@cluster0.0jmmz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log('connected to mongoDB');
    }

    catch(error){
        console.log('mongoDB error:', error);
    }
}

connect();

const server = app.listen(port, host, () => {
    console.log(`Node sever is listeing to ${server.address().port}`)
});

app.use("/api",router);