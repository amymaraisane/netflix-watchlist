var express = require ('express');
    router  = express.Router();
    db = require('../models');

//GET all data from db using .find()
router.get('/', (req, res)=>{
    db.Content.find()
    .then(todos=>{
        res.json(todos);
    })
    .catch(err=>{
        res.send(err);
    })
});

//POST new data to the db using .create()
router.post('/', (req, res)=>{
    db.Content.create(req.body)
    .then(newContent=>{
        res.json(newContent);
    })
    .catch(err=>{
        res.send(err);
    })
});

module.exports = router;


//GET one data item from db using .findById()
router.get('/:contentid', (req, res)=>{
    db.Content.findById(req.params.contentid)
    .then(foundContent=>{
        res.json(foundContent);
    })
    .catch(err=>{
        res.send(err);
    })
});

//PUT an update onto one data item using .findOneAndUpdate()
router.put('/:contentid', (req, res)=>{
    db.Content.findOneAndUpdate({_id: req.params.contentid}, req.body, {new: true})
    .then(updatedContent=>{
        res.json(updatedContent);
    })
    .catch(err=>{
        res.send(err);
    })
});

//DELETE one data item using .findOneAndRemove()
router.delete('/:contentid', (req, res)=>{
    db.Content.findOneAndRemove({_id: req.params.contentid})
    .then(()=>{
        res.json({message: "Content Deleted"});
    })
    .catch(err=>{
        res.send(err);
    })
});

module.exports = router;





