const { callStoredProcedure } = require("../services/callStoredProcedure");

async function addEmployee(req, res) {
    try {
        // const q1 = "INSERT INTO employee (`name`,`surname`) VALUES (?)";
        // const values =[
        //     req.body.name,
        //     req.body.surname
        // ]
        // const response1 = await connectDatabase(q1,[values]);
        // if (response1.dbData.affectedRows > 0) {
        //     console.log(response1.dbData);
        //     const empcode = response1.dbData.insertId;
        //     const q2 = "INSERT INTO empdetails (`gender`,`department`,`designation`,`salary`,`age`,`contact`,`empcode`,`address`) VALUES (?)";
        //     const values =[
        //         req.body.gender,
        //         req.body.department,
        //         req.body.designation,
        //         req.body.salary,
        //         req.body.age,
        //         req.body.contact,
        //         empcode,
        //         req.body.address
        //     ]
        //     const response2 = await connectDatabase(q2,[values]);
        //     if (response2.dbData.affectedRows > 0){
        //         return httpResponseSuccessHandler(res, msgCodeJson.ERR007.code, msgCodeJson.ERR007.msg);
        //     }    
        // }else{
        //    return httpResponseHandlerError(res, msgCodeJson.ERR009.code, msgCodeJson.ERR009.msg);
        // }
        const values = [
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

        const response = await callStoredProcedure(config.storedProcedure.SP2, values,"insert");
        console.log(response);

        if (response) {
            return httpResponseSuccessHandler(res, msgCodeJson.ERR004.code, msgCodeJson.ERR004.msg, response);
        } else {
            return httpResponseHandlerError(res, msgCodeJson.ERR001.code, msgCodeJson.ERR001.msg);
        }

    } catch (error) {
        return httpResponseHandlerError(res, msgCodeJson.ERR002.code, `${msgCodeJson.ERR002.msg} :${error}`);
    }
}

module.exports.addEmployee = addEmployee;
