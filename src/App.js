import React, { useReducer, useCallback, useRef, useMemo } from 'react'
import CreateUser from './CreateUser'
import useInputs from './useInputs'
import UserList from './UserList'

function CountActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...')
  return users.filter(user => user.active).length
}

const initialState = {
  users: [
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        active: true
    },
    {
        id: 2,
        username: 'shinchan',
        email: 'shinchan@gmail.com',
        active: false
    },
    {
        id: 3,
        username: 'moshi',
        email: 'moshi@gmail.com',
        active: false
    }
  ]
}

function reducer(state, action) {
  switch(action.type) {
    case "CREATE_USER":
      return {
        inputs: initialState.inputs, // input 초기화
        users: state.users.concat(action.user) // action으로 전달한 user 추가
      }
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map(user => 
          user.id === action.id 
          ? {...user, active: !user.active}
          : user
        )
      }
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default: 
      throw new Error('Unhandled action')
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = useInputs({
    username: '',
    email: ''
  })
  const {username, email} = form
  const {users} = state
  const nextId = useRef(4)

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    })
    nextId.current += 1
    reset()
  }, [username, email, reset])

  const onToggle = useCallback(id => {
    dispatch({
      type: "TOGGLE_USER",
      id
    })
  }, [])

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    })
  }, [])

  const count = useMemo(() => CountActiveUsers(users), [users])

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList 
        users={users}
        onToggle={onToggle}
        onRemove={onRemove}
      />
      <div>활성 사용자 수 : {count}</div>
    </>
  )
}

export default App;
