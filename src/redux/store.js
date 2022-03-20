import {createStore} from "redux";
import {pokemonReducer} from "./reducer/pokemonReducer";

export const store = createStore(pokemonReducer)

