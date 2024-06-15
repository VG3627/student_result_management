const express = require("express");
const cors = require('cors') ;
const path  = require('path') ;
require('dotenv').config();
//express app
const app = express();

app.use(cors()) ;

//const port = 3000;
const mongoose = require('mongoose'); //to connect to mongodb

//connect to mongodb and listen to requests
const dburl = process.env.MONGO_URI ;
mongoose.set('strictQuery',true) ;
mongoose.connect(dburl) 
.then((result) => app.listen(process.env.PORT || 8080)) // we want to listen for  after server is connected to mongodb
.catch((error) => console.log(error)) ;


//register view engine
app.use(express.static(path.join(__dirname, 'public')));
// app.set('views', './views');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')
app.use(express.json());
app.use(express.urlencoded({extended:true})) ;

//express layouts
var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

//teacher and student routes
const teachRoutes = require("./routes/teacherRoutes")
const studRoutes = require("./routes/studentRoutes")
app.use("/teacher",teachRoutes);
app.use("/student",studRoutes);

//routes
app.get("/", (req, res) => {
  res.render("index");
});

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});