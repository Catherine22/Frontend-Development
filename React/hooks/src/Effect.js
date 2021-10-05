import { useEffect, useReducer } from 'react';

// actions
const ACT_UPDATE_USERS = 0;
const ACT_UPDATE_POST = 1;

const reducer = (state, action) => {
    switch (action.type) {
        case ACT_UPDATE_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case ACT_UPDATE_POST:
            return {
                ...state,
                post: action.payload,
            };
        default:
            return state;
    }
};

function Effect() {
    const [state, dispatch] = useReducer(reducer, { users: [], comments: [] });

    const fetchUsers = async () => {
        let users = [];
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            );
            users = await response.json();
        } catch (error) {
            console.error(error);
        }
        dispatch({
            type: ACT_UPDATE_USERS,
            payload: users,
        });
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchPostByUserId = async (userId) => {
        let post = '';
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/comments/${userId}`
            );
            post = await response.json();
        } catch (error) {
            console.error(error);
        }
        dispatch({
            type: ACT_UPDATE_POST,
            payload: post,
        });
    };

    const userList = state.users.map((user) => (
        <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                <button onClick={() => fetchPostByUserId(user.id)}>
                    Fetch post
                </button>
            </td>
        </tr>
    ));
    return (
        <div>
            <div>
                <h3>Users</h3>
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>email address</th>
                            <th>post</th>
                        </tr>
                    </thead>
                    <tbody>{userList}</tbody>
                </table>
            </div>
            {state.post && (
                <div>
                    <h3>Post</h3>
                    <div>
                        <em>{state.post.title}</em>
                    </div>
                    <p>{state.post.body}</p>
                </div>
            )}
        </div>
    );
}
export default Effect;
