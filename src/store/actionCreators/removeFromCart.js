import REMOVE_FROM_CART from "../actions/removeFromCart"

function removeFromCart(index) {
    return {
        type: REMOVE_FROM_CART,
        value: index
    }
}

export default removeFromCart;