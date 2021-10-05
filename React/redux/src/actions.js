import {
    CHANGE_SEARCH_FIELD,
    FETCH_ROBOTS_PENDING,
    FETCH_ROBOTS_SUCCESS,
    FETCH_ROBOTS_FAILED,
    SEARCH_ROBOTS_SUCCESS,
} from './constants';

// export const setSearchField = (text) => ({
//     type: CHANGE_SEARCH_FIELD,
//     payload: text,
// });

export const setSearchField = (text, robots) => (dispatch) => {
    dispatch({ type: CHANGE_SEARCH_FIELD, payload: text });
    const value = text.replace(/\s/g, '').toLowerCase();
    // !value.length is equivalent to value.length === 0
    const res = !value.length
        ? robots
        : robots.filter((robot) => {
              return robot.name
                  .replace(/\s/g, '')
                  .toLowerCase()
                  .includes(value);
          });
    dispatch({ type: SEARCH_ROBOTS_SUCCESS, payload: res });
};

export const fetchRobots = (dispatch) => {
    dispatch({ type: FETCH_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => dispatch({ type: FETCH_ROBOTS_SUCCESS, payload: json }))
        .catch((error) =>
            dispatch({ type: FETCH_ROBOTS_FAILED, payload: error })
        );
};
