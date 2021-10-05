import React, { useReducer, useEffect } from 'react';
import CardList from '../components/CardList';
import Container from './Container';
import ErrorBoundary from './ErrorBoundary';
import SearchBox from '../components/SearchBox';
import './Robotfriends.css';

const SEARCH_ROBOTS = 0;
const FETCH_ROBOTS = 1;
const FETCH_ROBOTS_SUCCESS = 2;
const FETCH_ROBOTS_FAILED = 3;

const Robotfriends = (props) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case FETCH_ROBOTS:
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then((response) => response.json())
                    .then((json) =>
                        dispatch({ type: FETCH_ROBOTS_SUCCESS, payload: json })
                    )
                    .catch((error) =>
                        dispatch({ type: FETCH_ROBOTS_FAILED, payload: error })
                    );
                return state;
            case FETCH_ROBOTS_SUCCESS:
                return {
                    ...state,
                    robots: action.payload,
                    filteredRobots: action.payload,
                };
            case FETCH_ROBOTS_FAILED:
                return {
                    ...state,
                    robots: [],
                    filteredRobots: [],
                };
            case SEARCH_ROBOTS:
                const keyword = action.payload.replace(/\s/g, '').toLowerCase();
                const filteredRobots = !action.payload.length
                    ? state
                    : state.robots.filter((robot) =>
                          robot.name
                              .replace(/\s/g, '')
                              .toLowerCase()
                              .includes(keyword)
                      );

                return { ...state, filteredRobots };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, {
        robots: [],
        filteredRobots: [],
    });

    useEffect(() => dispatch({ type: FETCH_ROBOTS }), []);

    const onSearchChange = (event) => {
        dispatch({ type: SEARCH_ROBOTS, payload: event.target.value });
    };

    return (
        <div>
            <nav className="header">
                <h1 className="logo">RoboFriends</h1>
                <SearchBox
                    className="sb"
                    searchChange={onSearchChange}
                ></SearchBox>
            </nav>
            <Container>
                <ErrorBoundary>
                    <CardList
                        className="container"
                        robots={state.filteredRobots}
                    ></CardList>
                </ErrorBoundary>
            </Container>
        </div>
    );
};

export default Robotfriends;
