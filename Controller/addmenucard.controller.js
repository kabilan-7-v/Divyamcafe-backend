const Menucard = require("../Models/AddMenuCard.model.js");

exports.addmenucard = async (req, res) => {
  try {

    const { imageurl } = req.body;
    if (!imageurl) {
      return res.status(400).json({
        status: false,
        message: "Please enter all fields",
      });
    }

    const newmenucard = await Menucard.create({ imageurl });

    res.status(201).json({
      status: true,
      message: "Menu Card Added Successfully",
    });
  } catch (error) {
    console.error("Error in addmenucard:", error);
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};

exports.getmenucards = async (req, res) => {
    try {
      const menucards = await Menucard.find(); // Fetch all menu cards
      res.status(200).json({
        status: true,
        data: menucards,
      });
    } catch (error) {
      console.error("Error in getmenucards:", error);
      res.status(500).json({
        status: false,
        message: "Internal Server Error",
      });
    }
  };
  exports.deletemenucard = async (req, res) => {
    try {
      const { id } = req.params; // Extracting the ID from request parameters
      const deletedMenucard = await Menucard.findByIdAndDelete(id);
  
      if (!deletedMenucard) {
        return res.status(404).json({
          status: false,
          message: "Menu card not found",
        });
      }
  
      res.status(200).json({
        status: true,
        message: "Menu card deleted successfully",
      });
    } catch (error) {
      console.error("Error in deletemenucard:", error);
      res.status(500).json({
        status: false,
        message: "Internal Server Error",
      });
    }
  };
  