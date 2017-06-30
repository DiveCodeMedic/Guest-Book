const express = require('express');
const bodyParser =require('body-parser');
const app = express();

const port = process.env.PORT || 3000;

const message = [];

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


app.get('/message', (req, res) => {
    res.json(message);
});
app.post('/message', (req, res) => {
    const newMessage = req.body;

    message.push(newMessage);
    res.send('ok');
});
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});