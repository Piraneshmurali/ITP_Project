const express = require('express'); //Import Express
require('dotenv').config();
const app = express(); //Processing Requests And Responses

app.use((req,res,next) =>{
    console.log("path " + req.path + " method" + req.method);
    next();
});

app.get("/",(req,res)=>{ //get
    res.send("Hello World!!!");
});

app.listen(process.env.PORT,()=>{ //app listening to the port 4000
    console.log("Listening....");
});



