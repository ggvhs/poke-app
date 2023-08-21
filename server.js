const express = require("express");
const pokemon = require("./models/pokemon.js")


const app = express();
const port = 3007;

// SETTING UP VIEW ENGINE
app.set("views", `${__dirname}/views`);
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//LISTENER
app.listen(port , (req, res) => {
    console.log(`port is listening on ${port}`)
})

//ROUTE
app.get('/', (req,res) => {
    res.send(`<h1>Welcome to the pokemon app...</h1>`)
})

app.get('/pokemon', (req,res) => {
    // res.send(pokemon)
    res.render("Index", {
        pokemon: pokemon
    })
})

app.get('/pokemon/:id', (req,res) => {
    res.send(req.params.id);
});

/*
EXAMPLES

app.get("/fruits", (req, res) => {
    res.render("fruits/Index", {
        fruits: fruits
    });
});


DIV FOR LATER

*/