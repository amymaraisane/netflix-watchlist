const express = require('express');
        app = express();
        PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/views'));


app.get("/", (req, res)=>{
    res.sendFile("index.html");
});


app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});