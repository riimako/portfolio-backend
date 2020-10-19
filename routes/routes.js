const db = require('../data/lowdbconfig');

const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });

    app.post('/login', (request, response) => {
        let user = db.get('users').find({ "username": request.body.username }).value();
        if (user && user.password === request.body.password) {
            response.status(200).send(`User is logged correctly`);
        } else {
            response.status(404).send(`User not found`);
        }

    });
}
module.exports = router;
