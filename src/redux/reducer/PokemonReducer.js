const defaultState = {
  name : 'POKEDEX',
  height : '',
  weight : '',
  showInfo : true,
}

export const pokemonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'POKEMON_UPDATE':
      return {
        name: action.name,
        height: action.weight,
        weight: action.height,
        showInfo: action.showInfo
      }
    default: return state
  }
}

