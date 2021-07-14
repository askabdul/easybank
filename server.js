const express = require('express');
const next = require('next');

const port = 3000;

const arr = [12,48,45]

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    server.get('/', (req, res) => {
        return app.render(req, res, '/'); //the route referenced matches that which is on the frontend eg /page1 or /signup
    })

    //default route handler

    server.get('*', (req, res) => {
        return handle(req, res); //to give control to the frontend next proces
    })

    server.listen(port, (err) => {
        if(err) throw err;
        console.log(`Ready on http://localhost:${port}`);
    });
})