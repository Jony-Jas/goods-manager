const axios = require('axios');
const fetch = require('node-fetch');


exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/items')
        .then((response)=>{
            res.render('index',{items : response.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.add_item = (req, res) =>{
    res.render('add_item');
}

exports.update_item = (req, res) =>{
     axios.get('http://localhost:3000/api/items',{params:{id:req.query.id}})
        .then(function(userdata){
            var val = userdata.data;
            res.render("update_item", { item : val})
            console.log(val);
        })
        .catch(err =>{
            res.send(err);
        })
}
