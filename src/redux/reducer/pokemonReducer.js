const defaultState = {
  name : 'POKEDEX',
  height : '',
  weight : '',
  showInfo : true,
}


export const pokemonReducer = (state = defaultState, action) => {
      switch (action.type) {
        case 'update':
          return {
            name: action.name.toUpperCase(),
            height: action.weight,
            weight: action.height,
            showInfo: action.showInfo
          }

        default: return state
      }
}


