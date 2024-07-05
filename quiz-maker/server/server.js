require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const connectDb = require("./src/database/connect");
const quizRoutes = require("./src/routes/quiz");

const app = express();
const port = 5000 || process.env.PORT
app.use(cors());
app.use(bodyParser.json()); 
app.use("/api",quizRoutes);

app.get("/",(req,res)=>{
    res.send("Quiz Maker App");
});

const start = async ()=>{
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(port,(req,res)=>{
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log("Database Connection Failed. Server not started");
        console.log(error);
    }
};

start();
