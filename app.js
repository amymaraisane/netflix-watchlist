var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("home");
});

app.get("/search", (req, res)=>{
    res.render("search");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});