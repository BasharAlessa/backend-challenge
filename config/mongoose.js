const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://essa:essa@cluster0.everai0.mongodb.net/?retryWrites=true&w=majority")
        .then(()=>{
            console.log("Database is :        ---ON"); 
        })
        .catch((err)=>{
            console.log(err);
        })