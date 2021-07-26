// let MongoClient = require('mongodb').MongoClient;
// let url = 'mongodb://localhost/Library';

// MongoClient.connect(url, function(err, db){
//     //console.log('connected');
//     //db.close();
//     var cursor = db.collection('library').find();
//     //const coordinates = db.get('library');
//     db.Library.insert( { name: "Night Angel", quantity: 15, author:"Shankari" } )


//     cursor.each(function(err, doc) {

//         console.log(doc);
       
//     });
// })

var mongodb=require('mongodb');  
var MongoClient=mongodb.MongoClient;  
var url="mongodb://localhost:27017/"  
MongoClient.connect(url,function(error,databases){  
    if(error){  
        throw error;  
  
    }  
    var dbase=databases.db("Librarian");  
    dbase.createCollection("Book",function(error,response){  
        if(error){  
            throw error;  
        }  
      
    console.log("Book collection is created.....")  
    databases.close();  
    });  
    dbase.createCollection("Subscribe",function(error,response){  
        if(error){  
            throw error;  
        }  
      
    console.log("Subscribe collection is created.....")  
    databases.close();  
    });
    
}); 