export const userID = (state = '', action) => {
    switch (action.type) {
        case 'sendID':
            return action.ID
        default:
            return state
    }
}