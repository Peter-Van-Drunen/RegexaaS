const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/:regex/:subject', function (req, res) {
 
    const rgx = new RegExp(req.params.regex , 'g');
 
    var response = [];
    var arr;
    while ((arr = rgx.exec(req.params.subject)) !== null) {
        response.push(arr[0]);
    }   
 
    res.json(response);
});
 
app.post('/regex', function (req, res) {
    const rgx = new RegExp(req.body.source, 'g');
 
    var response = [];
    var arr;
    while ((arr = rgx.exec(req.body.subject)) !== null) {
        response.push(arr[0]);
    }
 
    res.json(response);
});

app.listen(1337);