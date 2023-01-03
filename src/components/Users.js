import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../redux/Actions/usersActions';

const Users = () => {
    const dispatch = useDispatch();
    const { isLoading, error, users } = useSelector((state) => state);

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])


    return (
        <div>
            <h1>Data fetching</h1>
            {isLoading && <h2>Loading...</h2>}
            {error && <p><small style={{ color: 'red' }}>{error.message}</small></p>}
            {
                users.map(user => (
                    <p key={user.id}>{user.email}</p>
                ))
            }
        </div>
    );
};

export default Users;