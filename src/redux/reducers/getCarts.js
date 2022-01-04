export const getCarts = (state = {}, action) => {
    switch (action.type) {
        case 'sendCarts':
            return action.cart
        default:
            return state
    }
}