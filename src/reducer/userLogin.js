export const userLogin = (state = false, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'showLogin':
            return true
        case 'hideLogin':
            return false
        default:
            return state
    }
}