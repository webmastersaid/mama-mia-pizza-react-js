import { bindActionCreators } from 'redux';
import ADD_TO_CART from './actions/addToCart';
import addToCart from './actionCreators/addToCart';
import removeFromCart from './actionCreators/removeFromCart';
import supPrice from './actionCreators/supPrice';
import subPrice from './actionCreators/subPrice';

function mapDispatchToProps(component) { 
    switch(component) {
        case ADD_TO_CART: return function(dispatch) {
            return {
                addToCart: bindActionCreators(addToCart, dispatch),
                removeFromCart: bindActionCreators(removeFromCart, dispatch),
                supPrice: bindActionCreators(supPrice, dispatch),
                subPrice: bindActionCreators(subPrice, dispatch)
            };
        };
        default: return undefined;
    }
}

export default mapDispatchToProps;