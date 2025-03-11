const Menu = require("../models/Menu")
const addMenu = async(req,res)=>{
    try {
        const data = req.body;
        console.log(data);
        const newMenu = new Menu(data);
        const result = await newMenu.save();
        console.log("Successfully added Menu", result);
        res.status(201).send("Successfully added Menu");
    } catch (error) {
        console.log("Error saving Menu data", error);
        res.status(500).send("Internal server error" + error);
    }
}
module.exports.addMenu= addMenu;