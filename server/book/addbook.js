var mongodb = require('mongodb');  
  
var mongoClient = mongodb.MongoClient;  
var url = "mongodb://localhost:27017/";  
  
mongoClient.connect(url, function(err, databases) {  
      if (err)   
      {  
        throw err;  
      }  
      var nodetestDB = databases.db("Librarian"); //here  
      var customersCollection = nodetestDB.collection("Book");    
      var newBook =   {_id:9, name:"XYZ" , quantity: 15, author:"F"};  
        
      customersCollection.insertOne(newBook, function(error, response) {  
          if (error) {  
              throw error;  
          }  
        
          console.log("1 document inserted");  
          databases.close();  
      });  
});   