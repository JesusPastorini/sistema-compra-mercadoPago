const express = require('express');
const cors = require('cors');
const { createPayment } = require('./controllers/paymentController');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'  // Permite somente o frontend acessar o backend
}));

// Middlewares
app.use(express.json());

// Rotas

app.post('/process_payment', createPayment);

module.exports = app;
