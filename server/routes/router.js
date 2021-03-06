const express = require('express');
const route = express.Router();
const controller = require('../controller/controller');
const services = require('../services/render');
 

route.get('/', services.homeRoutes);
route.get('/add-item', services.add_item);
route.get('/update-item', services.update_item)


route.post('/api/items', controller.create);
route.get('/api/items/', controller.find);
route.put('/api/items/:id', controller.update);
route.delete('/api/items/:id', controller.delete);



module.exports = route;