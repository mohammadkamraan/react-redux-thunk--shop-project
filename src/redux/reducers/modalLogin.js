export const modalLogin = (state = false, action) => {
    switch (action.type) {
        case 'showLogin':
            return true
        case 'hideLogin':
            return false
        default:
            return state
    }
}