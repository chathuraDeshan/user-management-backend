const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');


app.use(cors());

app.use(
    express.urlencoded({
        extended:true,
    })
);

app.use(express.json());

app.get('/users', (req, res) => {
    controller.getUsers(req,res,next => {
        res.send();
    });
});

app.post('/addUser', (req, res) => {
    controller.addUser(req.body, (callback) => {
        res.send();
    });
});

app.put('/updateuser', (req, res) => {
    controller.updateUser(req.body, (callback) => {
        res.send(callback);
    });
});

app.delete('/deletUser', (req,res) => {
    controller.deletUser(req.body, (callback) => {
        res.send(callback);
    });
});



module.exports= app;
