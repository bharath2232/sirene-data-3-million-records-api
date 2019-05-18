const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./dbconfig')
const sirene = require('./model')
mongoose.Promise =global.Promise;

mongoose.connect(db.url,{userNewUrlParser : true}).then(()=> {
    console.log('MongoDB Connected')
}).catch(err => {
    console.log('MongoFailed ',err)
})
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/:id', (req, res) => {
    const sevran = sirene.findOne({'fields.siren':req.params.id})
    .then(result => {
        console.log('Sucess',result);
        res.send(result);
    })
        .catch(err => console.log('error duude', err) )

})

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
app.timeout = 0;
