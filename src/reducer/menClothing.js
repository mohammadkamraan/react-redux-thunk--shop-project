export const menClothes = (state = 'ddd', action) => {
    console.log(action)
    switch (action.type) {
        case 'sendManClothes':
            return action.menClothes
        default:
            return state
    }
}