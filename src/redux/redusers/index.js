import {combineReducers} from "redux";
import filterReducer from '../redusers/filters'
import pizzasReducer from '../redusers/pizzas'
import cart from '../redusers/cart'

const rootReducer = combineReducers({
    filter: filterReducer,
    pizza: pizzasReducer,
    cart
});


export default rootReducer