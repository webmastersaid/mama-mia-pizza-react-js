import ADD_TO_CART from "../actions/addToCart";

function addToCart(food) {
    return {
        type: ADD_TO_CART,
        value: food
    }
}

export default addToCart;