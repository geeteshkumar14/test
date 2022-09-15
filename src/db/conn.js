const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/students" , {useUnifiedTopology: true, useNewUrlParser: true })
// return promise 
.then( () => {
    console.log("connection successfully......");
})
.catch( (err) => {
    console.log(err);
});