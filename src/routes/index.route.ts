import express from 'express';
const user_route = require('./user.route');

const route = express.Router();
// console.log('hello');

route.use('/user',user_route);

route.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello Worldffff!');
});

module.exports = route;
