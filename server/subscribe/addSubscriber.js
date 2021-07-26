var mongodb = require('mongodb');  
  
var mongoClient = mongodb.MongoClient;  
var url = "mongodb://localhost:27017/";  
  
mongoClient.connect(url, function(err, databases) {  
      if (err)   
      {  
        throw err;  
      }  
      var nodetestDB = databases.db("Librarian"); //here  
      var customersCollection = nodetestDB.collection("Subscribe");    
      var newSubscriber = {_id:6, name:"Sam" , books:["Revolution 2020"]};
        
      customersCollection.insertOne(newSubscriber, function(error, response) {  
          if (error) {  
              throw error;  
          }  
        
          console.log("1 document inserted");  
          databases.close();  
      });  
});   