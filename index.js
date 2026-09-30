const express = require("express")
const mongoose=require("mongoose")
const dotenv = require("dotenv")
const app = express()

dotenv.config()

const UserRouter = require("./router/user.route")
app.use("/api/v1", UserRouter)




mongoose.connect((process.env.DB_URI))
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("cannot connect to DB", err);
    })
        




















//creating and startting server
let PORT = process.env.PORT
app.listen(PORT, (err) => { 
    if (err) {
        console.log(err)
        console.log("Server is not running")
    } else {
        console.log(`Server is running on port ${PORT}`)
    }
})