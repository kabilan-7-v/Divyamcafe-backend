const express = require('express');
const { Logincreate, Loginverify } = require('../Controller/Login.controller');
const { addmenucard, getmenucards, deletemenucard } = require('../Controller/addmenucard.controller');
const { AddPlace, updatePlace, getPlaces } = require('../Controller/addplace.controller'); // ✅ Import updatePlace
const { addFeedback, updateFeedbackIsButton, getAllFeedbacks, updateFeedbackIshomepage, } = require('../Controller/feedback.controller');

const route = express.Router();

route.post("/login", Logincreate);
route.post("/loginverify", Loginverify);
route.post("/addmenucard", addmenucard);
route.post("/addplace", AddPlace);
route.put("/updateplace/:id", updatePlace); // ✅ Added updatePlace route
route.post("/addfeedback", addFeedback)
route.get("/getallfeedback", getAllFeedbacks)
route.put("/updatefeedback/:id",updateFeedbackIsButton)

route.get("/getplace", getPlaces)
route.get("/getmenucard", getmenucards)
route.put("/feedback/:id", updateFeedbackIsButton);
route.put("/updatefeedbackhomepage/:id", updateFeedbackIshomepage);


route.delete("/deletemenucard/:id", deletemenucard);

module.exports = route;
