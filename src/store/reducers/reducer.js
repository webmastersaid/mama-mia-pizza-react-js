import ADD_TO_CART from "../actions/addToCart";
import REMOVE_FROM_CART from "../actions/removeFromCart";
import SUP_PRICE from '../actions/supPrice';
import SUB_PRICE from '../actions/subPrice';

function reducer(state, action) {
    switch(action.type) {
        case ADD_TO_CART: 
            const addFood = [...state.cart, action.value];
            return { ...state,
                cart: addFood
            };
        case REMOVE_FROM_CART: 
            state.cart.splice(action.value, 1);
            return { ...state,
                cart: state.cart
            };
        case SUP_PRICE: 
            const supPrice = state.sum + action.value
            return { ...state,
                sum: supPrice
            };
        case SUB_PRICE: 
            const subPrice = state.sum - action.value;
            return { ...state,
                sum: subPrice
            };
        default: return state;
    }
}

export default reducer;