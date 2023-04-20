const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
    transaction:{
        type: Object,
        date: { type: Date, default: Date.now },
        typeTransaction: "String",
        amount: Number
    }
});

const Register = mongoose.model("register", RegisterSchema);
module.exports = Register;
