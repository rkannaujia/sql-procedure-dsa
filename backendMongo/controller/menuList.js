const Menu = require("../models/Menu")
const menuList = async(req,res)=>{
    try {
        const menuList = await Menu.find();
        res.status(200).json(menuList)
    } catch (error) {
       res.status(500).send("Internal server error "+error) 
    }
}
module.exports.menuList= menuList;