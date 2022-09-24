const express = require('express')
const app = express();
app.use(express.json());

const pizzas = [
    {id: 1, titulo: 'pizza de jamon', precio: 10.50},
    {id: 2, titulo: 'pizza de peperoni', precio: 10.50}
]

app.get('/', (req, res) => {
    res.send('bienvenido a mi aplicacion de pedidos')
});

app.get('/pizzas', (req, res) => {
    res.send(pizzas)
})

app.get('/pizzas/:id', (req, res) => {
    const pizza = pizzas.find(c => c.id  === parseInt(req.params.id))

    if(!pizza) res.status(404).send('<h2 style="font-family: Malugn Gothic; color: darkred;"> No encontrado </h2>')
    res.send(pizza)
})

const port = process.env.PORT || 8085
app.listen(port, ()=>console.log(`Escuchando en el puerto ${port}...`))
