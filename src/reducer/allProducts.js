export const categories = (state = '', action) => {
    switch (action.type) {
        case 'sendProducts':
            return action.products
        default:
            return state
    }
}