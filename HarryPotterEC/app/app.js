/*  Jessica Walker
    EC: Harry Potter Cloud Migration
*/

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// provides list of all spells in json format via harryPotterSpells.all
const harryPotterSpells = require("harry-potter-spells");
var spells = harryPotterSpells.all;

// variables to make the server
var server;
var port = 1234;

// retrieve all spells via var with spells array from HPS.all
app.get("/getSpells", function(req, res) {
    res.status(200).send(spells);
});

// returns json object for spell passed as query in url
app.get("/getSpell", function(req, res) {
    var q = req.query.name; // equals ?name=value_of_q
    var names = spells.map(el => el.name); // make a new array of elements with just spell names for simpler search
    if (names.includes(q)) {
        var i = names.indexOf(q); // index of name will be same as index of entire spell
        res.status(200).send(spells[i]);
    } else {
        var notFound = `{\"msg\":\"spell not found: ${q}\"}`;
        res.status(200).send(notFound);
    }
});

// accept json object, add to spells if not in spells array already
app.post("/addSpell", function(req, res) {
    var newSpell = req.body;
    var names = spells.map(el => el.name); // make a new array of elements with just spell names for simpler search

    if (names.includes(newSpell.name)) {
        res.send(`{"msg":"error - spell already exists!"}`);
    } else {
        spells.push(newSpell);
        res.send(`{"msg":"spell added."}`);
    }
});

// app listener
server = app.listen(port, function(err) {
    if (err) {
        throw err;
    }
    console.log("Listening on port " + port);
});