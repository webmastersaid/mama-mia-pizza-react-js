import ADD_TO_CART from './actions/addToCart';

function mapStateToProps(component) {
    switch(component) {
        case ADD_TO_CART: 
            return function (state) {
                return {
                    cart: state.cart,
                    sum: state.sum
                };
            };
        default: return undefined;
    }
}

export default mapStateToProps;