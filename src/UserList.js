import React from 'react'

function User({user, onRemove}) {
    return (
        <div>
            <strong>{user.username}</strong>
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
};

function UserList({users, onRemove}) {
    return (
        <div>
            {
                users.map((user, index) => (
                    <User 
                        key={user.id} 
                        user={user}
                        onRemove={onRemove} 
                    />
                ))
            }
        </div>
    );
};

export default UserList;