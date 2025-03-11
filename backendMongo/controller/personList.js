const Person = require('../models/person')
const personList = async (req,res )=>{
    try {
        const persons = await Person.find();
        res.status(200).json(persons)
    } catch (error) {
       res.status(500).send("Internal server error "+error) 
    }
}
module.exports.personList= personList;