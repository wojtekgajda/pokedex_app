import classes from "./Header.module.scss";
import {useState} from "react";
import {useSelector} from "react-redux";


const Header = ({load20More, loadMore, loadAll}) => {

  const [pokemonCount, setPokemonCount] = useState('')

  const morePokemonsHandler = (e) => {
    setPokemonCount(e.target.value)
  }
  const submitMorePokemonsHandler = (e) => {
    e.preventDefault()
    if (pokemonCount === '') {
      return null
    } else {
      loadMore(pokemonCount)
      setPokemonCount(pokemonCount)
    }
  }

  const data = useSelector(state => state.pokemonReducer)
  const pokeInfo = <div>
    <h2>{data.name.toUpperCase()}</h2>
    <p>{"weight:" + data.weight}</p>
    <p>{"height:" + data.height}</p>
  </div>

  return (
    <>
      <div className={classes.header}>
        <div className='col-5'>
          <div className={classes.screen}>
            {data.showInfo ? <h2>POKEDEX</h2> : pokeInfo}
          </div>
        </div>
        <div className='col-5 p-2'>
          <label htmlFor="">How many pokemons to load ? </label>
          <form className={classes.poke_form} onSubmit={submitMorePokemonsHandler}>
            <input value={pokemonCount} className={classes.poke_input} onChange={morePokemonsHandler} type="number"
                   min='0' max='1126'/>
            <button>++</button>
            <button onClick={load20More}>+20</button>
            <button onClick={loadAll}>All</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Header;
