const stripe = require('stripe')(process.env.STRIPE_KEY)

const paymentInit = async (req, res) => {
    try {
        const { products } = req.body
        const lineItems = products.map((product) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: product.name,
                    images: [product.img]
                },
                unit_amount: (product.price * 100) * 100,
            },
            quantity: product.stock
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "https://instacart-mdsw.onrender.com/success",
            cancel_url: "https://instacart-mdsw.onrender.com/cancel",
        });

        res.json({ id: session.id })
    } catch (error) {
        res.send(error)
    }
}

module.exports = paymentInit

