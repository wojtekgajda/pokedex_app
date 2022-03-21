import {combineReducers, createStore} from "redux";
import {pokemonReducer} from "./reducer/PokemonReducer";


const reducers = combineReducers({pokemonReducer})
export const store = createStore(reducers)




