import {
    CHANGE_SEARCH_FIELD,
    FETCH_ROBOTS_PENDING,
    FETCH_ROBOTS_SUCCESS,
    FETCH_ROBOTS_FAILED,
    SEARCH_ROBOTS_SUCCESS,
} from './constants';

const initialStateSearch = {
    searchField: null,
    filteredRobots: [],
};

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: null,
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return {
                ...state,
                searchField: action.payload,
            };
        case SEARCH_ROBOTS_SUCCESS:
            return {
                ...state,
                filteredRobots: action.payload,
            };
        default:
            return state;
    }
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case FETCH_ROBOTS_PENDING:
            return {
                ...state,
                isPending: true,
                robots: [],
            };
        case FETCH_ROBOTS_SUCCESS:
            return {
                ...state,
                isPending: false,
                robots: action.payload,
            };
        case FETCH_ROBOTS_FAILED:
            return {
                ...state,
                isPending: false,
                robots: [],
                error: action.payload,
            };
        default:
            return state;
    }
};
