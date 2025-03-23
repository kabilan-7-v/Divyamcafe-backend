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