const express = require('express');
const app = express();
const {render} = require('ejs');



app.use(express.static("./static"));
app.set('view engine','ejs');





app.listen(3000, ()=>{
    console.log("eBaruwa.com");
})


app.get('/', (req,res)=>{
    res.render("index");
})

app.get('/contacts',(req,res)=>{
    res.render("contacts");
})