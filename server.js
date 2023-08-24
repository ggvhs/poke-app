require('dotenv').config();
const express = require("express");
const Pokeman = require("./models/pokeman.js")
const mongoose = require('mongoose')

//my server runs

const app = express();
const port = 3007;


mongoose.connect(process.env.MONGO_URI_POKEMON, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  });


mongoose.connection.once('open',()=>{
    console.log('connected to mongodb')
  })


// SETTING UP VIEW ENGINE
app.set("views", `${__dirname}/views`);
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//LISTENER
app.listen(port , (req, res) => {
    console.log(`port is listening on ${port}`)
})

// INDEX ROUTE
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


app.get('/pokemon',  async function(req,res) {
    const foundPokeman = await Pokeman.find({})
    res.render("Index", {
        pokemon: foundPokeman
    })
})

app.get('/pokemon/new' , (req, res) =>{
    res.render('New')
})

//create
app.post('/pokemon', async (req,res) =>{
    console.log("this is the pokemon ",req.body)
    const createdPokemon = await Pokeman.create({
    name: req.body.name,
    img: "http://imgpokemondb.net/artwork/" + req.body.name.toLowerCase()
    })
    console.log(createdPokemon)
    res.redirect("/pokemon")
})

app.get('/pokemon/:id', async (req,res) => {
    const onePokeman = await Pokeman.findById(req.params.id)
    // res.send(req.params.id);
    res.render("Show",{
        pokemon: onePokeman
    })
});