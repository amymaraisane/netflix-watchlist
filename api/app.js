const express = require('express');
        app = express();
        PORT = process.env.PORT || 3000;

        contentRoutes = require('./routes/content')

app.use(express.static(__dirname + '/views'));


app.get("/", (req, res)=>{
    res.sendFile("index.html");
});

app.use('/api/content', contentRoutes);

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});