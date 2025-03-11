const { callStoredProcedure } = require("../services/callStoredProcedure");
// const { connectDatabase } = require("../utils/MySQL/dbConn");

async function getEmployeeById(req, res) {
    try {
    //    const q = "SELECT emp.empcode, emp.name, emp.surname, empdet.gender, empdet.department, empdet.salary, empdet.age FROM employee.employee as emp INNER JOIN employee.empdetails as empdet ON emp.empcode = empdet.empcode";
        // const response = await connectDatabase(q);
        const values =[
            req.params.id
        ]
         const response = await callStoredProcedure(config.storedProcedure.SP3,values);
        //  console.log(response.dbData[0]);
         
        if (response.length > 0) {
            return httpResponseSuccessHandler(res, msgCodeJson.ERR004.code, msgCodeJson.ERR004.msg, response);
        } else {
            return httpResponseHandlerError(res, msgCodeJson.ERR001.code, msgCodeJson.ERR001.msg);
        }

    } catch (error) {
        return httpResponseHandlerError(res, msgCodeJson.ERR001.code, `${msgCodeJson.ERR001.msg} :${error}`);
    }

}
module.exports.getEmployeeById = getEmployeeById;