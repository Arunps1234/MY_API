const mongoose = require("mongoose")

const userAuth = new mongoose.Schema({

firstname : {
    type : String,
    required : [true, "Please enter firstname"]
},

lastname : {
    type : String,
    required : [true, "Please enter lastname"]
},

email : {
    type : String,
    required : [true, "Please enter email adress"]
},

phone : {
    type : Number,
    required : [true, "Please enter phone number"]
}, 

password : {

    type : String,
    required : [true, "Please enter password "]


}
})

module.exports = mongoose.model("user", userAuth)