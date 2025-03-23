const mongoose = require("mongoose");


const Feedback = mongoose.Schema({
    msg:String,
    writtername:String,
    date:String,
    isbutton:Boolean

});
module.exports = mongoose.model("feedback",Feedback);