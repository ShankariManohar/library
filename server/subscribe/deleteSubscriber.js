var mongodb=require('mongodb');  
var MongoClient=mongodb.MongoClient;  
var url ='mongodb://localhost:27017/';  
MongoClient.connect(url,function(error,databases){  
    if(error)  
{  
    throw error;  
}  
    var nodtst=databases.db('Librarian');  
    var deleteQuery={name:'Sam'};  
   nodtst.collection("Subscribe").deleteOne(deleteQuery,function(error,response){  
        if(error){  
            throw error;  
  
        }  
console.log(response.result.n+" 1 document deleted......");  
databases.close();  
  
    })  
  
});  