const express = require('express');
        app = express();
        PORT = process.env.PORT || 3000;
        mongoose = require('mongoose');

app.use(express.static(__dirname + '/views'));

mongoose.connect('MONGODB://localhost/albums', {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.set('useFindAndModify', false);

app.get("/", (req, res)=>{
    res.sendFile("index.html");
});



app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});