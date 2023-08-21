import React from 'react';


module.exports = function Index({ pokemon }) {

    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        width: "100vw",
        height: "100vh",
        textAlign: "center"
        };
        
       
    return (
        <div style={myStyle}>
            <h1>
                See All Those Pokemon :3
            </h1>
            <ul>
            {pokemon.map((pokemon, index)=>{
                return (
                    <li key={index}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</li>
                )
            })}
            </ul>
        </div>
    )
        


}


/*
MAKE A DIV

 return (
          <div style={myStyle}>My First React Component!</div>;
        }

*/

