import React from 'react';
import './Card.css';
import '../shared.css';

const card = (props) => {
    const { id, name, email } = props;
    return (
        <div className="card">
            <div className="item grow">
                <img
                    src={`https://robohash.org/${id}?200x200`}
                    alt="robots"
                ></img>
                <div>
                    <h1>{name}</h1>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default card;
