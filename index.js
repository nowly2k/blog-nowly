import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose
    .connect('mongodb+srv://nowly:6277mars@cluster0.3lrp1om.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch(() => console.log('DB error'))

const app = express();

app.use(express.json())

app.post('/auth/register', (req, res) => {

})

app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('Server OK')
})