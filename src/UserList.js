import React from 'react'

function User({user}) {
    return (
        <div>
            <strong>{user.username}</strong>
            <span>({user.email})</span>
        </div>
    )
}

function UserList() {
    const users = [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'shinchan',
            email: 'shinchan@gmail.com'
        },
        {
            id: 3,
            username: 'moshi',
            email: 'moshi@gmail.com'
        }
    ]
    return (
        <div>
            {
                users.map(
                    user => (<User key={user.id} user={user} />)
                )
            }
        </div>
    )
}

export default UserList