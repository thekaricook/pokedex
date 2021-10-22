import React from 'react';
import pokemonType from '../../helpers/pokemonTypes';
import './style.css';

function Card({ pokemon }) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={pokemon.sprites.front_default} alt="" className="pokemon-img" />
            </div>
            <div className="card-name">
                {pokemon.name}
            </div>
            <div className="card-types">
                {pokemon.types.map(type => {
                    return (
                        <div className="card-type" style={{background: pokemonType[type.type.name]}}>
                            {type.type.name}
                        </div>
                    )
                })}
            </div>
            
            <div className="card-info">
                {/* <div className="card-data card-data-weight">
                    <p className="title">Number</p>
                    <p>{pokemon.id}</p>
                </div>
                <div className="card-data card-data-weight">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="card-data card-data-ability">
                    <p className="title">Abilities</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div> */}
            </div>
        </div>
        
    )
}

export default Card;