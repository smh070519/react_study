import React from 'react';
import User from './User';

const Users = ({user}) => {
    const userMap = user.map((user,i)=> <User key={i} user={user}/>)
    return (
        <div>
            {userMap}
        </div>
    );
};

export default Users;