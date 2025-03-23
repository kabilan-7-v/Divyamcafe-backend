
const Menucard = require('../Models/AddMenuCard.model.js')

exports.addmenucard =async(req,res)=>{
    const {imageurl} = req.body;
    if(
        !imageurl
    ){
        return res.status(400).json({
            status: false,
            message: "Please enter all fields"
            })
    }
    const newmenucard =  await Menucard.create({
        imageurl
    })
    res.status(201).json({
        status: true,
        message: "Menu Card Added Successfully",
    })
    
    

}