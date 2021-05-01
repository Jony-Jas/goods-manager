const express = require('express');
const app=express();
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const bodyparser = require('body-parser');
const route = require('./server/routes/router');
const connectDB = require('./server/database/connection')

app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({extended:true}));

dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8000;
connectDB();

app.set('view engine','ejs');
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))

app.use('/',route);

app.listen(PORT,()=>{console.log('Server is running at http://localhost:'+PORT)});