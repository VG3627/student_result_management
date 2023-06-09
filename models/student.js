//importing mongoose
const mongoose = require("mongoose")

mongoose.pluralize(null) ;
// schema represents the structure of a particular document
// Each schema maps to a MongoDB collection
const { Schema } = mongoose;

//Student schema
const studentSchema = new Schema({
  roll: {
    type : Number,
    unique : true
  } ,
  name: String,     
  dob:{
    type:Date
  } ,
  Physics: {
    type : Number
  } ,
  Chemistry: {
    type : Number
  } ,
  Maths: {
    type : Number
  } ,
  Percentage: {
    type : Number
  } 
});

//exporting the model
// A model defines a programming interface for interacting with the database (read, insert, update, etc).
module.exports = mongoose.model("Student", studentSchema)