import { TEST_ACTION } from '../actions/defaultAction';

const initalState = { default: {} };

export const defaultReducer = (state = initalState.default, action) => {
    switch (action.type) {
        case TEST_ACTION:            
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};

export default defaultReducer;