const express=require('express');
const exphbs=require('express-handlebars');
const path =require('path');
const bodyParser = require("body-parser");
const PORT=process.env.PORT||5000;
require("./models/db");
require('./controllers/employer');
var app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.engine('handlebars', exphbs({defaultLayout:'mainlayout',
extname:'.hbs',
layoutsDir:'views/layout'
}));
app.set('view engine', '.hbs');
//app.set('views', path.join(__dirname, './views'));
app.use( express.static( path.join( application_root, 'views') ) );
app.enable('view cache');
app.listen(PORT,(err)=>{
    if(!err){
        console.log(`server running on port ${PORT}`);

    }
    else if(err){
        console.log(err);
    }
});

