/**
* Define the different web services that clients can call.
*/

var appRouter = function(app,MongoClient,dburl) {

  app.get('/getVotes', function(req, res) {

    MongoClient.connect(dburl, {useNewUrlParser: true}, function(err, client) {
      if (err) throw err;

      //get a database object for our comp246 MongoDB database
      var dbo = client.db("comp246");
      
      //the find method with a query object filters the results
      var query = { vote: "skittles" };
      var num_skittles = 0;
      var num_mms = 0;
      
      dbo.collection("votes").find(query).toArray(function(err, result) {
        if (err) throw err;
        num_skittles = result.length;
        
        query = { vote: "m&ms" };
        dbo.collection("votes").find(query).toArray(function(err, result) {
          if (err) throw err;
          num_mms = result.length;
          var responseJson = {"num_skittles":num_skittles,"num_mms":num_mms};
          res.status(200).send(responseJson);
          client.close();
        });
        
      });  
    
    });
  });

  app.post('/vote',function(req, res) {

    MongoClient.connect(dburl, {useNewUrlParser: true}, function(err, client) {

      //get a database object for our comp246 MongoDB database
      var dbo = client.db("comp246");
      var the_vote = req.body.vote;
      the_vote = the_vote.toLowerCase().trim();

      switch(the_vote) {
        case "skittles":
        case "m&ms":
        break;
        default:
          res.status(200).send({"msg":"invalid vote: " + the_vote});
          return;
      }
      
      //NOW insert the vote into the MongoDB collection
      var myvotedata = { "vote": the_vote };

      //insert
      dbo.collection("votes").insertOne(myvotedata, function(err, result) {
        if (err) throw err;
        console.log("vote for: " + myvotedata.vote);
        client.close();
        var responseJson = {"msg":"Thank you for voting for: " + the_vote + "!"};
        res.status(200).send(responseJson);
        return;
      });

    });    
    
  });
  
  
  //NEW DELETE request to delete all votes
  app.delete('/deleteAll',function(req, res) {

    MongoClient.connect(dburl, {useNewUrlParser: true}, function(err, client) {

      //get a database object for our comp246 MongoDB database
      var dbo = client.db("comp246");
      dbo.collection("votes").drop(function(err, delOK) {
        if (err) {
          client.close();
          var responseJson = {"msg":"unable to delete collection"};
          res.status(200).send(responseJson);
          return;
        } else if (delOK) {
          console.log("Collection deleted");
          client.close();
          var responseJson = {"msg":"all votes deleted"};
          res.status(200).send(responseJson);
          return;
        } else {
          client.close();
          var responseJson = {"msg":"unknown error"};
          res.status(200).send(responseJson);
          return;
        }
      });

    });    
    
  });
  
  
  
  
  
 
}

module.exports = appRouter;
