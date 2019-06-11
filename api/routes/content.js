var express = require ('express');
    router  = express.Router();
    Content = require('../models/content');

router.get('/', (req, res)=>{
    res.send('Hello from todos routes!');
});

module.exports = router;