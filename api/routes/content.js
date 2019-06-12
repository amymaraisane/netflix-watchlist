var express = require ('express');
    router  = express.Router();
    db = require('../models');

//GET all data from db using .find method
router.get('/', (req, res)=>{
    db.Content.find()
    .then(todos=>{
        res.json(todos);
    })
    .catch(err=>{
        res.send(err);
    })
});

//POST new data to the db
router.post('/', (req, res)=>{
    db.Content.create(req.body)
        .then(newContent=>{
            res.json(newContent);
        })
        .catch(err=>{
            res.send(err);
        })
});

//GET one data item from db
router.get('/:contentid', (req, res)=>{
    db.Content.findById(req.params.contentid)
        .then(foundContent=>{
            res.json(foundContent);
        })
        .catch(err=>{
            res.send(err);
        })
});

//PUT an update onto one data item
router.put('/:contentid', (req, res)=>{
    db.Content.findByIdAndUpdate(req.params.contentid, req.body, {new: true})
        .then(updatedContent=>{
            res.json(updatedContent);
        })
        .catch(err=>{
            res.send(err);
        })
});

//DELETE one data item
router.delete('/:contentid', (req, res)=>{
    db.Content.findByIdAndDelete(req.params.contentid)
        .then(()=>{
            res.json({message: "Content Deleted"});
        })
        .catch(err=>{
            res.send(err);
        })
});

module.exports = router;


