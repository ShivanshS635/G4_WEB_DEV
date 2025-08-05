//REQUIRE OR IMPORT ALL MODULES HERE ONLY
const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');

const userRouter = require('./routes/userRoutes.js');

//SET INSANCES HERE ONLY
const app = express();

app.use(express.json())

//VARIABLE DECLARATION HERE ONLY
const PORT = process.env.PORT || 4000;

//ROUTES
app.use('/api/user' , userRouter)

async function dbConnect(){
    await mongoose.connect(process.env.DATABASE_URI).then(() => {
        console.log("DB CONNECTED");
    });
}

dbConnect().then( () => {
    app.listen(PORT , () => {
        console.log(`SERVER RUNNING AT PORT : ${PORT}`)
    })
});