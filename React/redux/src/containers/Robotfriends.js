import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import Container from './Container';
import ErrorBoundary from './ErrorBoundary';
import SearchBox from '../components/SearchBox';
import './Robotfriends.css';
import { setSearchField, fetchRobots } from '../actions';

// check reducers
const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        filteredRobots: state.searchRobots.filteredRobots,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
    };
};

// check actions
const mapDispatchToProps = (dispatch) => {
    return {
        // onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onSearchChange: (event, robots) =>
            setSearchField(event.target.value, robots)(dispatch),
        onRequestRobots: () => fetchRobots(dispatch),
    };
};

const Robotfriends = (props) => {
    const {
        onSearchChange,
        onRequestRobots,
        robots,
        filteredRobots,
        searchField,
        isPending,
    } = props;
    useEffect(onRequestRobots, []);
    return (
        <div>
            <nav className="header">
                <h1 className="logo">RoboFriends</h1>
                <SearchBox
                    className="sb"
                    searchChange={(event) => onSearchChange(event, robots)}
                ></SearchBox>
            </nav>
            <Container>
                <ErrorBoundary>
                    <CardList
                        className="container"
                        robots={
                            searchField && searchField.trim().length
                                ? filteredRobots
                                : robots
                        }
                        isPending={isPending}
                    ></CardList>
                </ErrorBoundary>
            </Container>
        </div>
    );
};

// connect is a higher-order function, which returns a function.
// It means to subscribe any changes to redux store (what state should I listen to, what dispatch/action should I listen to).
export default connect(mapStateToProps, mapDispatchToProps)(Robotfriends);
