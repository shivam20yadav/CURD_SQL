import express from 'express';
import * as user_controller from '../controller/user.controller';

const user_route = express.Router();

user_route.get('/getuser', user_controller.getuser);
user_route.post('/adduser', user_controller.adduser);
user_route.delete('/deleteuser/:username', user_controller.deleteuser);
user_route.put('/updateuser/:username', user_controller.updateuser);
module.exports = user_route; 