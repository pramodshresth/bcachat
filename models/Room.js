const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    room :{
        type : String,
        required : "Room Is Required"
    }
})

module.exports = mongoose.model("Room", roomSchema)