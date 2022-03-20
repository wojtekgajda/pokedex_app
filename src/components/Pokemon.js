import {useDispatch} from "react-redux";

const Pokemon = (props) => {
  const dispatch = useDispatch();

  const AdditionalPokemonInfoHandler = () => {
    dispatch({
      type: 'update',
      name: props.name,
      height: props.height,
      weight: props.weight,
      showInfo: props.showInfo
    })
  }



  return (
    <div className='card col-3 p-3 bg-opacity-100'>

      <h4 onClick={AdditionalPokemonInfoHandler}>{props.name}</h4>
      <div>{props.type}</div>
      <img src={props.sprite} alt=""/>

    </div>
  )
}
export default Pokemon;
