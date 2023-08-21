import React from 'react';


module.exports = function Show({ pokemon }) {

    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        width: "100vw",
        height: "100vh",
        textAlign: "center",
        };
        
       
    return (
        <div style={myStyle}>
            <h1>
            Gotta Catch 'Em All :3
            </h1>
        
            
                <h2>
                   {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} 
                </h2>

                <img src={`${pokemon.img}.jpg`} alt= {`This is a wild ${pokemon.name}`} />
                   
                <a href="/pokemon" >back</a>
            
            
            
        </div>
    )
        


}
