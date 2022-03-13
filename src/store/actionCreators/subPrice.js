import SUB_PRICE from '../actions/subPrice';

function subPrice(price) {
    return {
        type: SUB_PRICE,
        value: price
    }
}

export default subPrice;