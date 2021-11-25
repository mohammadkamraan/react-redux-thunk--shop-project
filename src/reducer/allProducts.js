export const categories = (state = '', action) => {
    console.log(action.products)
    switch (action.type) {
        case 'sendProducts':
            return action.products
        default:
            return state
    }
}