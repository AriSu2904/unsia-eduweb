export const setToken = (token) => ({
    type: 'SET_TOKEN',
    payload: token
});

export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

export const logout = () => ({
    type: 'LOGOUT'
})