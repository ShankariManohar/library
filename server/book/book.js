var mongodb = require('mongodb');  
  
var mongoClient = mongodb.MongoClient;  
var url = "mongodb://localhost:27017/";  
  
mongoClient.connect(url, function(err, databases) {  
      if (err)   
      {  
        throw err;  
      }  
      var nodetestDB = databases.db("Librarian"); //here  
      var books = [
        {_id:1, name:"Wings of fire" , quantity: 5, author:"APJ"},
        {_id:2, name:"ABC" , quantity: 15, author:"A"},
        {_id:3, name:"DEF" , quantity: 25, author:"B"},
        {_id:4, name:"GHI" , quantity: 3, author:"B"},
        {_id:5, name:"JKL" , quantity: 1, author:"C"},
        {_id:6, name:"MNO" , quantity: 4, author:"D"},
        {_id:7, name:"PQR" , quantity: 50, author:"E"},
        {_id:8, name:"STU" , quantity: 15, author:"E"}
      ]
    //   var customersCollection = nodetestDB.collection("Book");    
    //   var customer = {_id:111, name:"Wings of fire" , quantity: 5, author:"APJ"};  
        
    //   customersCollection.insertOne(customer, function(error, response) {  
    //       if (error) {  
    //           throw error;  
    //       }  
        
    //       console.log("1 document inserted");  
    //       databases.close();  
    //   });  
    nodetestDB.collection('Book').insertMany(books , function(error,response){  
        if(error){  
            throw error;  
          
        }  
        console.log("n Number of document is inserted.........");  
    }) 
});  