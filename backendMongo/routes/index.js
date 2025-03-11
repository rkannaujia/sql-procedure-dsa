const express = require('express');
const router = express.Router();
const addPersonController = require('../controller/addPerson');
const personListController = require('../controller/personList');
const addMenuController = require('../controller/addMenu');
const menuListController = require('../controller/menuList');


router.post('/addPerson',(req,res)=>{
    addPersonController.addPerson(req,res)   
});
router.get('/personList',(req,res)=>{
    personListController.personList(req,res)   
});
router.post('/addMenu',(req,res)=>{
    addMenuController.addMenu(req,res)   
});
router.get('/menuList',(req,res)=>{
    menuListController.menuList(req,res)   
});


module.exports =router;