const express = require("express");
const app = express();
const harryPotterSpells = require("harry-potter-spells"); // provides list of all spells in json format via harryPotterSpells.all
var spells = harryPotterSpells.all;

app.get("/getSpells", function(req, res) {
    res.status(200).send(spells);
});

// returns json object for spell passed as query in url
app.get("/getSpell", function(req, res) {
    var q = req.query.name; // ?name=value_of_q
    var names = spells.map(el => el.name); // make a new array of elements with just spell names
    if (names.includes(q)) {
        var i = names.indexOf(q); // index of name will be same as index of entire spell
        res.status(200).send(spells[i]);
    } else {
        var notFound = `{\"msg\":\"spell not found: ${q}\"}`;
        res.status(200).send(notFound);
    }
});

//  # add a new spell
//  curl --header "Content-Type: application/json" --request POST -sS --data '{ \"name\":\"Zap\",\"type\":\"spell\",\"effect\":\"Shocks victim.\" }' http://localhost:1234/addSpell
// {"msg":"spell added."}
/*
var newSpell = {
    "name": name,
    "type": type,
    "effect": effect
};
*/
app.post("/addSpell", function(req, res) {});

app.listen(1234);

console.log("Server is running...");


/*  DIRECTIONS:

getSpells - A GET request that returns all the Harry Potter spells in JSON format.
getSpell - A GET request that returns a single spell in JSON format.
            Accept a name parameter and return the spell with that name. 
            If the spell does not exist, return a JSON message stating so.
addSpell - A POST request that adds a spell to the server. 
            This request should accept three form fields: name, type, and effect. 
            Return a JSON message indicating the status of the add request.

Example:    {"name":"Silencio","type":"spell","effect":"Silences victim"}

cURL Examples:

$  # retrieve all spells
$  curl -X GET -sS http://localhost:1234/getSpells  

$  # retrieve only the Silencio spell
$  curl -X GET -sS http://localhost:1234/getSpell?name=Silencio
{"name":"Silencio","type":"spell","effect":"Silences victim"}

$  # get a spell that does not exist
$  curl -X GET -sS http://localhost:1234/getSpell?name=xyzxyz
{"msg":"spell not found: xyzxyz"}

$  # add a new spell
$  curl --header "Content-Type: application/json" --request POST -sS --data '{ \"name\":\"Zap\",\"type\":\"spell\",\"effect\":\"Shocks victim.\" }' http://localhost:1234/addSpell
{"msg":"spell added."}

$  # get the spell that was just added
$  curl -X GET -sS http://localhost:1234/getSpell?name=Zap
{"name":"Zap","type":"spell","effect":"Shocks victim."}

$  # try to add the same spell
$  curl --header "Content-Type: application/json" --request POST -sS --data '{ \"name\":\"Zap\",\"type\":\"spell\",\"effect\":\"Shocks victim.\" }' http://localhost:1234/addSpell
{"msg":"error - spell already exists!"}
*/