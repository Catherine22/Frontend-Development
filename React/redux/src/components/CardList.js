import React from 'react';
import './CardList.css';
import Card from './Card';
import Loading from './Loading';

// props = {robots}
const CardList = ({ robots, isPending }) => {
    const cardComponents = isPending ? (
        <div className="content">
            <Loading></Loading>
        </div>
    ) : !robots.length ? (
        <div>No robots</div>
    ) : (
        robots.map((user, i) => {
            return (
                <Card
                    key={i}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                />
            );
        })
    );
    return <div className="wrapper">{cardComponents}</div>;
};

export default CardList;
