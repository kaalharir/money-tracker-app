const express = require('express');
const app = express();
const port = 4040;
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
    res.json({ body: 'test4 ok' });
});

app.post('/api/transaction', (req, res) => {
    console.log(process.env.MONGO_URL);
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    const { name, description, datetime } = req.body;
    res.json(req.body);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
