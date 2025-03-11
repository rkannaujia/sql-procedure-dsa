const { callStoredProcedure } = require("../services/callStoredProcedure");
// const { connectDatabase } = require("../utils/MySQL/dbConn");

async function updateEmployee(req, res) {
    try {
    //    const q = "SELECT emp.empcode, emp.name, emp.surname, empdet.gender, empdet.department, empdet.salary, empdet.age FROM employee.employee as emp INNER JOIN employee.empdetails as empdet ON emp.empcode = empdet.empcode";
        // const response = await connectDatabase(q);
        const values = [
            req.params.id,
            req.body.name,
            req.body.surname,
            req.body.gender,
            req.body.department,
            req.body.designation,
            req.body.salary,
            req.body.age,
            req.body.contact,
            req.body.address
        ];
         const response = await callStoredProcedure(config.storedProcedure.SP4, values, "update");
        //  console.log(response.dbData[0]);
         
        if (response) {
            return httpResponseSuccessHandler(res, msgCodeJson.ERR004.code, msgCodeJson.ERR004.msg, response);
        } else {
            return httpResponseHandlerError(res, msgCodeJson.ERR001.code, msgCodeJson.ERR001.msg);
        }

    } catch (error) {
        return httpResponseHandlerError(res, msgCodeJson.ERR001.code, `${msgCodeJson.ERR001.msg} :${error}`);
    }

}
module.exports.updateEmployee = updateEmployee;