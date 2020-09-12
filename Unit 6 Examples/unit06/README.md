# mongodbtest

A quick MongoDB tutorial.

## Installing MongoDB

1. Install the [MongoDB Community Edition](https://www.mongodb.com/download-center?_ga=2.130841807.1956001079.1530706604-464610910.1530706604&_gac=1.129166974.1530706748.CjwKCAjw4PHZBRA-EiwAAas4Zo_iU50QIGtXL6KsxJLyDGoghsPToWOWzGxgfJUzdb78T3zKFDuI_hoCsCMQAvD_BwE#community). Click the _Community Server_ tab.
1. During installation, *uncheck* _Install MongoDB Compass_. Do not install that tool, because it hangs.
1. How to start MongoDB from the command line: [link](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#start-mdb-edition-from-the-command-interpreter).

## Running MongoDB

We will create a local _data_ folder to hold the runtime MongoDB files for our database. The _data_ folder is not versioned.

Run these commands from a Bash terminal:

```
$ cd myrepo
$ mkdir -p "data\db" "data\log"
$ mongod  --dbpath="data\db"  # Ctrl+C to stop
```

## Running the sample Node.js app

```
$ cd myrepo
$ node app.js 
```



