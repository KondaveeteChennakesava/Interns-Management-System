const express = require('express')
const Router = express.Router()

const UserController = require("../controllers/UserController")

Router.post('/api/add-intern', UserController.AddIntern);
Router.get('/api/get-interns', UserController.GetInternsData);                                                                                                                                                                                                                                                                               
Router.get('/api/edit-interns/:id', UserController.InternDataById);
Router.post('/api/update-intern/:id', UserController.UpdateSingleIntern);
Router.delete('/api/delete-intern/:id', UserController.DeleteInternData);                                                                                                                                                                                                                                                                             

module.exports = Router;