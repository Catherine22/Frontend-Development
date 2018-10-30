import React, {Component} from 'react';

const users = [
    {username: 'Jerry', age: 21, gender: 'male'},
    {username: 'Tomy', age: 22, gender: 'male'},
    {username: 'Lily', age: 19, gender: 'female'},
    {username: 'Lucy', age: 20, gender: 'female'}
];

class App extends Component {
    // -------------------JS style-------------------
    // render() {
    //     const userElements = [];
    //     for (let user of users) {
    //         userElements.push(
    //             <div key={user.username}>
    //                 <div>{`name: ${user.username}`}</div>
    //                 <div>{`age: ${user.age}`}</div>
    //                 <div>{`sex: ${user.gender}`}</div>
    //                 <hr/>
    //             </div>
    //         );
    //     }
    //     return (
    //         <div className="App">
    //             <header className="App-header">
    //                 {userElements}
    //             </header>
    //         </div>
    //     );
    // }

    // -------------------JS style-------------------

    // -------------------ES6 style-------------------
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {
                        users.map((user, index) => {
                            return (
                                <div key={index}>
                                    <div>{`name: ${user.username}`}</div>
                                    <div>{`age: ${user.age}`}</div>
                                    <div>{`sex: ${user.gender}`}</div>
                                    <hr/>
                                </div>
                            );
                        })
                    }
                </header>
            </div>
        );
    }

    // -------------------ES6 style-------------------

}

export default App;
