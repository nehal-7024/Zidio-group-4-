const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
connectDB();

app.use('/api/auth', require('./routes/auth'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
