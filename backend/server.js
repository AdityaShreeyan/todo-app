const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://shreeyanaditya:LHlD6cLdumUbdOAm@cluster0.nuqy0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.log('MongoDB Atlas connection error: ', error));

app.get('/', (req,res) => {
    res.send('Hello from backend');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});