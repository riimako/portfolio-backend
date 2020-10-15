const connection = require('../data/config');
const pool = require('../data/config');

const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });
    app.get('/users', (request, response) => {
        connection.connect(function (err) {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                return;
            }

            console.log('Connected as id ' + connection.threadId);
        });
        connection.query('SELECT * FROM users', (error, result) => {
            if (error) throw error;

            response.send(result);
            connection.end();
        });
    });

    app.get('/users/:nickname', (request, response) => {
        const nickname = request.params.nickname;
        connection.connect(function (err) {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                return;
            }

            console.log('Connected as id ' + connection.threadId);
        });
        connection.query('SELECT * FROM users where nickname = ?', nickname, (error, result) => {
            if (error) throw error;

            response.send(result);
            connection.end();
        });
    });
}



module.exports = router;
