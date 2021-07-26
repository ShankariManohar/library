var mongodb=require("mongodb");  
var MongoClient=mongodb.MongoClient;  
var url='mongodb://localhost:27017/';  
MongoClient.connect(url, function(error, databases){  
    if(error){  
        throw error;  
  
    }  
     
    var nodtst = databases.db("Librarian");  
    nodtst.collection("Subscribe").find({}).toArray(function(err, totalpract) {  
        if (err) throw err;  
          
        for(i = 0; i < totalpract.length; i++) {  
             let pract = totalpract[i];  
           console.log(pract.name);  
         }  
           
           
          
        //console.log(result);  
        databases.close();  
    });    
});  