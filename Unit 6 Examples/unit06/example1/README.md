This example shows how to use a MongoDB database with Node.js.

# Getting Started

Clone this repo, then follow the below instructions.

## MongoDB

### Installing MongoDB

1. Install the [MongoDB Community Edition](https://www.mongodb.com/download-center?_ga=2.130841807.1956001079.1530706604-464610910.1530706604&_gac=1.129166974.1530706748.CjwKCAjw4PHZBRA-EiwAAas4Zo_iU50QIGtXL6KsxJLyDGoghsPToWOWzGxgfJUzdb78T3zKFDuI_hoCsCMQAvD_BwE#community). Click the _Community Server_ tab.
1. During installation, *uncheck* _Install MongoDB Compass_. Do not install that tool, because it hangs.
1. How to start MongoDB from the command line: [link](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#start-mdb-edition-from-the-command-interpreter).

### Running MongoDB

We will create a local _db_ folder to hold the runtime MongoDB files for our database.

Run these commands from a Bash terminal:

```
$  cd comp246/unit06
$  mongod --dbpath="db"  # Ctrl+C to stop
```

### Running the Node.js Server
1. Download and install [Node.js](https://nodejs.org/en/)
1. Start a _Git Bash_ or open a Mac/Linux _Terminal_ and execute these commands:

    ```
    $  cd comp246/unit06/programs
    $  npm config set strict-ssl false  # necessary from Brookdale
    $  npm config set registry="http://registry.npmjs.org/"  # necessary from Brookdale
    $  npm init  # initialize npm; press Enter to accept all defaults
    $  npm install  # load the necessary Node.js modules from the Internet
    $  node app.js
    ```

## Run MongoDB Node.js Programs

* Go to the program directory: `cd comp246/unit06/programs/example1`
* Run Node.js programs:

    ```
    $  node createdb.js
    $  node createcollection.js
    $  # etc.
    ```
