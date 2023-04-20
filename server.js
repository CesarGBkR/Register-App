require("dotenv").config();

const express = require("express");
const connectDB =  require("./config/db");
const app = express() 

const register = require("./router/Register");

connectDB();
app.use(express.json({extended: false}));
app.get("/", (req, res) => res.send("Server Up and running"));

app.use("/api/register", register);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>{
    console.log(`server is running on http://localhost:${PORT}`);
});