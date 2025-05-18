const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const app = express();

// for encrypt the password, create salt
const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://himanshikhandelwal81:UEAFEB9Hs4XJkj4e@cluster0.mgsez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');



// register page -->  post request
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const userDoc = await User.create({
            username,
            // and store in collection the password with bycrypt
            password: bcrypt.hashSync(password, salt),
        });
        res.json(userDoc);
    } catch (error) {
        res.status(400).json(error);
    }
    
    // res.json({ requestData: { username, password } });
    // res.json("test ok23!");

});

app.listen(4000);