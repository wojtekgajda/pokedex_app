import Pokemon from "./Pokemon";

const PokemonList = ({pokemons}) => {

  return (
    <>
      <div className='container'>
        <div className='row'>
          {pokemons.map(pokemon => <Pokemon key={pokemon.id} name={pokemon.name} height={pokemon.height}
                                            weight={pokemon.weight} type={pokemon.types[0].type.name}
                                            sprite={pokemon.sprites.front_default}
          />)}
        </div>
      </div>
    </>
  )
}

export default PokemonList;
