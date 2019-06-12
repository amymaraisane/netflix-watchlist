var express = require ('express');
    router  = express.Router();
    db = require('../models');
    helpers = require('../helpers/content');

router.route('/')
    .get(helpers.getContent)
    .post(helpers.addContent);

router.route('/:contentid')
    .get(helpers.getOne)
    .put(helpers.updateOne)
    .delete(helpers.deleteOne);

module.exports = router;


