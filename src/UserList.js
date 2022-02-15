import React from 'react'

function User({user}) {
    return (
        <div>
            <strong>{user.username}</strong>
            <span>({user.email})</span>
        </div>
    )
};

function UserList({users}) {
    return (
        <div>
            {
                users.map((item) => {
                    return <User key={item.id} user={item}></User>
                })
            }
        </div>
    );
};

export default UserList;