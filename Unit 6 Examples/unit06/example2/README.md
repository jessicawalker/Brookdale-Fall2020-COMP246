# Get out and vote! (MongoDB Version)

## Skittles vs. M&Ms 

This example uses Node.js clients to make requests to a Node.js server. The HTML page is a static page served up by the server.

### Server requirements

You must install these Node.js libraries:

```
$  npm config set strict-ssl false
$  npm config set registry="http://registry.npmjs.org/"  
$  npm install http
$  npm install express
$  npm install body-parser
```

### Start the server

```
$  node app.js
```

### Run the Clients

```
$  node client_hello.js
$  node client_helloparam.js
$  node client_getvotes.js
$  node client_vote.js
```

### Hello service

The _Hello_ service returns a message. It is a simple service to test connectivity.

* Type: HTTP GET
* URL: [http://localhost:1234/hello](http://localhost:1234/hello)
* Optional parameter: [http://localhost:1234/hello?name=Alice](http://localhost:1234/hello?name=Alice)
* Return JSON: `{"msg":"Hi "}` or `{"msg":"Hi Alice"}`

---

### Get votes service

The _Get Votes_ service returns the current vote count.

* Type: HTTP GET
* URL: [http://localhost:1234/getVotes](http://localhost:1234/getVotes)
* Return JSON: `{"num_skittles":1,"num_mms":1}`

---

### Vote service

The _Vote_ service places your vote.

* Type: HTTP POST
* URL: [http://localhost:1234/vote](http://localhost:1234/vote)
* Send JSON: `{ "vote" : "skittles" }` or `{ "vote" : "m&ms" }`
* Return JSON: `{"msg":"Thank you for voting for: skittles"}`
