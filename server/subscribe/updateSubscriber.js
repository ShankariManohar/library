var mongodb=require('mongodb');  
var MongoClient=mongodb.MongoClient;  
var url="mongodb://localhost:27017/"  
MongoClient.connect(url,function(error,databases){  
    if(error){  
        throw error;  
  
    }  
    var nodtst=databases.db("Librarian");  
var whereClause = { name:/sam/};  
var newvalues = { $set: { name:"Shankar"}};  
nodtst.collection("Subscribe").updateOne(whereClause,newvalues,function(err,res){  
    if(error){  
        throw error;  
  
    }  
    console.log(res.result.n + "document updated");  
});  
});  