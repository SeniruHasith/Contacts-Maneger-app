const express = require("express");
const errorhandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const  app = express();
const ditenv = require("dotenv").config();
connectDb();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/contacts",require("./routes/contactsroutes"))

app.use(errorhandler);

app.listen(port,()=>{
    console.log(`Server running on ${port} port`)
})