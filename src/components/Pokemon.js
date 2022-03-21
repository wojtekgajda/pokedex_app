import {useDispatch} from "react-redux";
import classes from "./Pokemon.module.scss";

const Pokemon = (props) => {
  const dispatch = useDispatch();

  const AdditionalPokemonInfoHandler = () => {
    dispatch({
      type: 'POKEMON_UPDATE',
      name: props.name,
      height: props.height,
      weight: props.weight,
      showInfo: props.showInfo
    })
  }

  return (
    <>
      <div onClick={AdditionalPokemonInfoHandler} className='card col-3 p-3'>
        <h4>{props.name.toUpperCase()}</h4>
        <div>{props.type}</div>
        <img className={classes.card_wrapper} src={props.sprite} alt=""/>
      </div>
    </>
  )
}
export default Pokemon;
