const express = require('express');
      app = express();
      PORT = process.env.PORT || 3000;
      bodyParser = require('body-parser');

      contentRoutes = require('./routes/content');


app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));;
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.sendFile("index.html");
});

app.use('/api/content', contentRoutes);


app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});