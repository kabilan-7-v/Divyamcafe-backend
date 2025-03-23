const mongoose = require("mongoose");


const Menucard = mongoose.Schema({
    imageurl:String

});
module.exports = mongoose.model("menucard",Menucard);