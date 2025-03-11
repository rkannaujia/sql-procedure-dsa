const Person = require('../models/person')
async function addPerson(req, res) {
    try {
        const data = req.body;
        console.log(data);
        const newPerson = new Person(data);
        const result = await newPerson.save();
        console.log("Successfully added person", result);
        res.status(201).send("Successfully added person");
    } catch (error) {
        console.log("Error saving Person data", error);
        res.status(500).send("Internal server error" + error);
    }
}
module.exports.addPerson = addPerson;