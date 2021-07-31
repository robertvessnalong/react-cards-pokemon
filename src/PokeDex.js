import React from 'react';
import PokemonSelect from './PokemonSelect';
import PokemonCard from './PokemonCard';
import './PokeDex.css';
import { useAxios } from './hooks';

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const url = `https://pokeapi.co/api/v2/pokemon/`;
  const [pokemon, setPokemon] = useAxios(url);
  return (
    <div className='PokeDex'>
      <div className='PokeDex-buttons'>
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={setPokemon} />
      </div>
      <div className='PokeDex-card-area'>
        {pokemon.map((cardData) => (
          <PokemonCard
            key={cardData.id}
            front={cardData.front}
            back={cardData.back}
            name={cardData.name}
            stats={cardData.stats.map((stat) => ({
              value: stat.value,
              name: stat.name,
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
