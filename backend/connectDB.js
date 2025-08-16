const mongoose = require("mongoose")

function connectDB(url){
    mongoose.connect(url)
    .then(()=>{
        console.log("Mongodb Connected");
    })
    .catch((err)=>{
        console.log("Mongodb connection error:", err);
    })
}

module.exports = {connectDB}