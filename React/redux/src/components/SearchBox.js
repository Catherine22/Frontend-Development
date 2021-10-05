import React from 'react';
import './SearchBox.css';
import searchIcon from '../res/search.svg';

const SearchBox = ({ searchChange }) => {
    return (
        <div className="sb">
            <form action="">
                <input
                    aria-label="Search robots"
                    type="search"
                    placeholder="search robots"
                    onChange={searchChange}
                ></input>
                <div className="icon">
                    <img src={searchIcon} alt="search"></img>
                </div>
            </form>
        </div>
    );
};

export default SearchBox;
