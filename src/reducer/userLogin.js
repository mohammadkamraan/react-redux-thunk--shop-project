export const userLogin = (state = false, action) => {
    switch (action.type) {
        case 'loged_in':
            return true
        case 'loged_out':
            return false
        default:
            return state
    }
}