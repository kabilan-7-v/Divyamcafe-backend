const express = require('express');
const { Logincreate, Loginverify } = require('../Controller/Login.controller');
const { addmenucard } = require('../Controller/addmenucard.controller');
const { AddPlace, updatePlace } = require('../Controller/addplace.controller'); // ✅ Import updatePlace
const { addFeedback } = require('../Controller/feedback.controller');

const route = express.Router();

route.post("/login", Logincreate);
route.post("/loginverify", Loginverify);
route.post("/addmenucard", addmenucard);
route.post("/addplace", AddPlace);
route.put("/updateplace/:id", updatePlace); // ✅ Added updatePlace route
route.post("/addfeedback",addFeedback)

module.exports = route;
