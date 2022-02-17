import React from 'react'

const User = React.memo(function User({user, onRemove, onToggle}) {
    const { username, email, id, active } = user
    console.log(user)

    return (
        <div>
            <strong 
                style={{
                    'color': active ? 'green' : 'black', 
                    cursor: 'pointer'
                }} 
                onClick={() => onToggle(id)}
            >
                {username}
            </strong>
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
});

function UserList({users, onRemove, onToggle}) {
    return (
        <div>
            {
                users.map((user) => (
                    <User 
                        key={user.id} 
                        user={user}
                        onRemove={onRemove} 
                        onToggle={onToggle}
                    />
                ))
            }
        </div>
    );
};

export default React.memo(
    UserList, 
    (prevProps, nextProps) => nextProps.users === prevProps.users
)