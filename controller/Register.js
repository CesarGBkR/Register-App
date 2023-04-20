const Register = require("../model/Register");

exports.getAllRegisters = (req, res) => {
    Register.find()
        .then((registers) => res.json(registers))
        .catch((err) => 
        res
            .status(404)
            .json({message:"Registers Not Found", err: err.message})    
        );
};

exports.postCreateRegister = (req, res) => {
    Register.create(req.body)
        .then((data) => res.json({message:"Register Added Sucessfully", data}))
        .catch((err) => 
        res
            .status(400)
            .json({message:"Fail To Create Register", err: err.message})    
        );
};

exports.putUpdateRegister = (req, res) => {
    Register.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({message:"Register Updated Sucessfully", data}))
        .catch((err) => 
        res
            .status(400)
            .json({message:"Fail To Update Register", err: err.message})    
        );
};

exports.deleteRegister = (req, res) => {
    Register.findByIdAndRemove(req.params.id)
    .then((data) => res.json({message:"Register Deleted Sucessfully", data}))
    .catch((err) => 
        res
            .status(400)
            .json({message:"Fail To Delete Register", err: err.message})    
        );
};
