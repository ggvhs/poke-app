import React from 'react';
import Pokeman from '../models/pokeman';


module.exports = function Index({ pokemon }) {

    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        width: "100vw",
        height: "100vh",
        textAlign: "center",
        };

    const listItemStyle ={
        listStyleType: 'none'
    }
        
       
    return (
        <div style={myStyle}>
            <nav>
            <a href="/pokemon/new">Create New Pokemon</a>
            </nav>
            <h1>
                See All Those Pokemon :3
            </h1>
            <ul>
            {pokemon.map((pokeman, index)=>{
                return (
                    <>
                    
                    <li style={listItemStyle} key={index}> <a href={`/pokemon/${Pokeman.id}`}>{pokeman.name.charAt(0).toUpperCase() + pokeman.name.slice(1)} </a></li>
                   
                    </>
                )
            })}
            </ul>
        </div>
    )
        


}

