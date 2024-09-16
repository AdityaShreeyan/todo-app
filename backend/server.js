const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/todos', require('./routes/todoRoutes'));

app.get('/', (req,res) => {
    res.send('Hello from backend');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
