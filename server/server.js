const express = require('express');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

app.get('/decks', (req,res) => {
    res.send('testing');
})

app.get('/cards', (req,res) => {
    res.send('testing');
})


app.listen(port, () => {
    console.log('Server is up on port ' + port);
    
})