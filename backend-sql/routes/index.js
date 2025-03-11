const express =require ('express');
 const config = require('../config/data/config.json');
const router = express.Router();
const getUrlPrefix = config.app.prefix;

const getAllBooksController = require('../controller/getAllBooks');
const addBookController = require('../controller/addBook');
const getexcelwithcustomController = require('../controller/excelTemplateWithCustom');
const getEmpDetailsController = require('../controller/getEmpDetails');
const addEmployeeController = require('../controller/addEmployee');
const getEmployeeByIdController = require('../controller/getEmployeeById');
const updateEmployeeController = require('../controller/updateEmployee');
const deleteEmployeeController =require('../controller/deleteEmployee');

console.log('getUrlPrefix',getUrlPrefix);

router.get(getUrlPrefix + '/ping',(req,res)=>{
    res.status(200).send("pong");
});

router.get(getUrlPrefix + '/getAllBooks',(req,res)=>{
    getAllBooksController.getAllBooks(req,res)   
});
router.post(getUrlPrefix + '/addBook',(req,res)=>{
    addBookController.addBook(req,res)   
});
router.get(getUrlPrefix + "/excelTemplateDownloadWithCustom", (req, res) => {
    getexcelwithcustomController.excelTemplateWithCustom(req, res);
  });
  router.get(getUrlPrefix + '/getEmpDetails',(req,res)=>{
    getEmpDetailsController.getEmpDetails(req,res)   
});
router.post(getUrlPrefix + '/addEmployee',(req,res)=>{
    addEmployeeController.addEmployee(req,res)   
});
router.post(getUrlPrefix + '/updateEmployee/:id',(req,res)=>{
    updateEmployeeController.updateEmployee(req,res)   
});
router.get(getUrlPrefix + '/getEmployeeById/:id',(req,res)=>{
    getEmployeeByIdController.getEmployeeById(req,res)   
});
router.delete(getUrlPrefix + '/deleteEmployee/:id',(req,res)=>{
    deleteEmployeeController.deleteEmployee(req,res)   
});
module.exports = router;