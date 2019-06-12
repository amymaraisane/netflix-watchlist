var db = require('../models');

//adding the functions into an object 
exports.getContent = (req, res)=>{
    db.Content.find()
    .then(todos=>{
        res.json(todos);
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.addContent = (req, res)=>{
    db.Content.create(req.body)
        .then(newContent=>{
            res.status(201).json(newContent);
        })
        .catch(err=>{
            res.send(err);
        })
}

exports.getOne = (req, res)=>{
    db.Content.findById(req.params.contentid)
    .then(foundContent=>{
        res.json(foundContent)
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.updateOne = (req, res)=>{
    db.Content.findOneAndUpdate({_id: req.params.contentid}, req.body, {new: true})
    .then(updatedContent=>{
        res.json(updatedContent);
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.deleteOne = (req, res)=>{
    db.Content.findOneAndRemove({_id: req.params.contentid})
    .then(()=>{
        res.json({message: "Content Deleted"});
    })
    .catch(err=>{
        res.send(err);
    })
}

module.exports = exports;