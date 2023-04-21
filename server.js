require("dotenv").config();

const express = require("express");
const connectDB =  require("./config/db");
const app = express() 

const register = require("./router/Register");
connectDB();

const path = require('path');

// app.use(express.json({extended: false}));
// app.get("/", (req, res) => res.sendFile("D:/RepositoriosOwn/RegistroGastosMERN/react-app/src/public/index.html"));

app.use(express.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'register/src')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'register/src/pages'));
});

app.use("/api/register", register);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>{
    console.log(`server is running on http://localhost:${PORT}`);
});





