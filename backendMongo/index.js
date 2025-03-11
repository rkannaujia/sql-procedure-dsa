// server.js
const express = require("express");
const connectDb = require("./config/db");
const indexRouter = require('./routes/index')
const Person = require('./models/person')
// Initialize the app and database
const app = express();


// Middleware
app.use(express.json());
//routes
app.use('/',indexRouter);



app.get('/person/:workType', async (req, res) => {
    try {
        const data = req.params.workType;
        if(data == 'chef' || data == 'waiter' || data == 'manager'){
            const result = await Person.find({work:data})
            console.log("Successfully fetched", result);
            res.status(200).send(result);
        }else{
            res.status(404).send("invalid worktype ")
        }
    } catch (error) {
        console.log("Error fetching  data", error);
        res.status(500).send("Internal server error" + error);
    }
})

app.put('/person/:id' , async(req,res)=>{
    try {
        const personId= req.params.id;
        const updatePersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId,updatePersonData, { new: true, runValidators: true })
         if(!response) return res.status(404).json("Person not found")
        res.status(200).json("Updated successfully");
        
    } catch (error) {
        res.status(500).json("Internal server error"+error);
    }
})


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

connectDb();

