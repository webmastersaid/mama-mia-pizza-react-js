import SUP_PRICE from '../actions/supPrice';

function supPrice(price) {
    return {
        type: SUP_PRICE,
        value: price
    }
}

export default supPrice;