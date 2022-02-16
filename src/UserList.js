import React from 'react'

function User({user, onRemove, changeColor}) {
    return (
        <div>
            <strong 
                style={{
                    'color': user.active ? 'green' : 'black', 
                    cursor: 'pointer'
                }} 
                onClick={() => changeColor(user.id)}
            >
                {user.username}
            </strong>
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
};

function UserList({users, onRemove, changeColor}) {
    return (
        <div>
            {
                users.map((user, index) => (
                    <User 
                        key={user.id} 
                        user={user}
                        onRemove={onRemove} 
                        changeColor={changeColor}
                    />
                ))
            }
        </div>
    );
};

export default UserList;