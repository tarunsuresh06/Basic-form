const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use('/public', express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile('./login.html', {root: __dirname});
});

app.post('/', (req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);
    res.send('Response Added to our server')
}); 

app.get('/register', (req, res) => {
    res.sendFile('./register.html', {root: __dirname});
});

app.post('/register', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    if (password === confirmPassword) {
        res.sendFile('./login.html', {root: __dirname});
    } else {
        res.send('Password did not match');
    }

});

app.listen(3000, () => {
    console.log('Server Started on PORT 3000');
});