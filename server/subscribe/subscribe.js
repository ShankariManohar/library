var mongodb = require('mongodb');  
  
var mongoClient = mongodb.MongoClient;  
var url = "mongodb://localhost:27017/";  
  
mongoClient.connect(url, function(err, databases) {  
      if (err)   
      {  
        throw err;  
      }  
      var nodetestDB = databases.db("Librarian"); //here  
      var subscribers = [
        {_id:1, name:"Shankari" , books:["ABC", "STU"]},
        {_id:2, name:"Sham" ,books:["ABC", "STU"]},
        {_id:3, name:"Theja" , books:["DEF", "ABC"]},
        {_id:4, name:"Nini" , books:["MNO", "STU"]},
        {_id:5, name:"Vishal" , books:["PQR"]}
       
      ]
    nodetestDB.collection('Subscribe').insertMany(subscribers , function(error,response){  
        if(error){  
            throw error;  
          
        }  
        console.log("n Number of document is inserted.........");  
    }) 
});  