export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                isAuthenticated: true,
                user: action.payload,
            };
        case "LOGOUT":
            return {
                isAuthenticated: false,
            };
        default:
            return state;
    }
};
