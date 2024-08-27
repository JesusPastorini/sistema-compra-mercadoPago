const { MercadoPagoConfig, Payment } = require('mercadopago');

const client = new MercadoPagoConfig({
    accessToken: process.env.ACCESS_TOKEN,
});

const payment = new Payment(client);

exports.createPayment = (req, res) => {
    payment.create({ body: req.body.body })
        .then(response => {
            console.log(response);
            res.json(response);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Payment failed', details: error });
        });
};
