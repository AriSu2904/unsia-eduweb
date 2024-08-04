const initialState = {
    data: {
        id: null,
        title: null,
        author: null,
        content: null,
        materials: [],
        comments: [],
        approval: null
    }
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_POSTS":
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}

export default postReducer;