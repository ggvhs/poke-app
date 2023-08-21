const express = require("express");
const pokemon = require("./models/pokemon.js")

//my server runs

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

//Middle ware 
app.use((req,res,next)=> {
    console.log('I run for all routes!')
    next();
})

//this allows the body 
app.use(express.urlencoded({extended:false}))


app.get('/pokemon', (req,res) => {
    // res.send(pokemon)
    res.render("Index", {
        pokemon: pokemon
    })
})

app.get('/pokemon/new' , (req, res) =>{
    res.render('New')
})

//create
app.post('/pokemon', (req,res) =>{
    console.log(req.body)
    pokemon.push(req.body)
    console.log("the pokemon array", pokemon)
    res.redirect("/pokemon")
})

app.get('/pokemon/:id', (req,res) => {
    // res.send(req.params.id);
    res.render("Show",{
        pokemon: pokemon[req.params.id]
    })
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