const express = require("express");

require("./db/conn")
const Student = require("./models/student");
const { body, validationResult } = require('express-validator');
const app = express();
const port = process.env.PORT || 8080;


// how to create middleware
app.use(express.json());

// how to send data usin routing
app.route("/student").post((req,res)=>{
    const user = new Student(req.body);
    user.save().then( () => {
        res.send(user);
    }).catch( (error) => {
        res.send(error)
    })
}
    

);

app.post("/",
body('name').contains(),
  // password must be at least 5 chars long
  body('password').isLength({ min: 5 }),
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Email validation
    body('email').isEmail(),
    (req, res) => {
        const errors = validationResult(req);
    if (!errors.isEmpty() && errors.errors[0].param === 'email') {
        return res.status(400).send('Invalid email address. Please try again.')
      }
    }
    //console.log(req.body);
    const user = new Student(req.body);
    user.save().then( () => {
        res.send(user);
    }).catch( (error) => {
        res.send(error)
    })
    
});

app.listen(port , () => {
     console.log(` connection is setup at ${port} `);
});