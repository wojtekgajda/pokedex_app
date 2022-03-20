import {useEffect, useState} from "react";
import PokemonList from "./components/PokemonList";
import Header from "./layout/Header";
import {pokemonService} from "./services/PokemonService.js";
import classes from "./index.module.scss";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [detailedPokemons, setDetailedPokemonList] = useState([])
  const [morePokemons, setMorePokemons] = useState(20);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    pokemonService.getPokemonList(morePokemons, morePokemons)
      .then((pokemonList) => {
        setPokemonList(pokemonList);
        Promise.all(pokemonList.map(pokemon =>pokemonService.fetchPokemonDetails(pokemon.url)))
          .then(detailedPokemonList => {
            setDetailedPokemonList(detailedPokemonList)
          });
      })
    setLoading(false);
  }, [morePokemons])


  const Load20More = (e) => {
    e.preventDefault()
    setMorePokemons(prevState => prevState + 20)
  }

  const LoadMore = (num) => {
    setMorePokemons(parseInt(num))
  }

  return (
    <div className="App ">
      <div className='container d-flex flex-column justify-content-center align-items-center'>
        <div className={classes.header_wrapper}>
          <Header load20More={Load20More} loadMore={LoadMore}/>
        </div>
        <div>
          {loading ? <h2>Loading...</h2> : <PokemonList pokemons={detailedPokemons}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
