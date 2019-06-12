var express = require ('express');
    router  = express.Router();
    db = require('../models');

router.get('/', (req, res)=>{
    res.send(Content.find({}));
});

module.exports = router;