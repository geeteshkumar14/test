const mongoose = require("mongoose");
const validator = require("validator");
const { default: isEmail } = require("validator/lib/isemail");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlenth: 30,
        required : true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id is alrady exists"],
    },
    password: {
        type: String,
        required: true,
        
    },
    phone: {
        type: Number,
        minlength: 10,
        maxlength: 10
    }
   
});

    // how to create a collection
    const Student = new mongoose.model("Student",studentSchema);
    module.exports = Student;

