var Itemsdb = require('../model/model');

exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    const item = new Itemsdb({
        name: req.body.name,
        quantity: req.body.quantity,
        availability: req.body.availability
    })

    item
        .save(item)
        .then(data=>{
            res.redirect('/add-item');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

exports.find=(req,res)=>{
    if(req.query.id){
        var id = req.query.id;
        Itemsdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({ message : "Not found user with id "+ id})
            }else{
                console.log(data);
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message: "Error retrieving user with id " + id})
        })
    }else{
        Itemsdb.find()
        .then(item =>{
            res.send(item)
        })
        .catch(err => {
            res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
        })
    }
}

exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Itemsdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

exports.delete = (req,res)=>{
    const id = req.params.id;

    Itemsdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
        }else{
            res.send({
                message : "Item was deleted successfully!"
            })
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Could not delete User with id=" + id
        });
    });
}
