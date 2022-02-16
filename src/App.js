import React, { useRef, useState, useMemo } from 'react'
import CreateUser from './CreateUser'
import UserList from './UserList'

function CountActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...')
  return users.filter(user => user.active).length
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })
  const {username, email} = inputs

  const onChange = (e) => {
    const { name, value } = e.target // [e.name] = e.target.value 하니까 입력불가
    setInputs({
      ...inputs, 
      [name]: value
    })
  }

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4) // 값이 바뀌어도 rerendering 하지 않음
  
  const onCreate = () => {
    const user = {
      'id': nextId.current,
      username,
      email
    };

    setUsers([
      ...users, user // 기존 배열에 새로운 배열 추가
    ])
    // setUsers(users.concat(user)) 사용 가능

    setInputs({
      'username': '',
      'email': ''
    })
    nextId.current += 1
  }

  const onRemove = id => { // 삭제 시에는 filter 사용
    setUsers(
      users.filter(user => user.id !== id)
    )
  }

  const changeColor = id => { // 업데이트 할때, map을 사용해서 구현 가능
    setUsers(
      users.map(user => user.id === id ? {...user, active: !user.active} : user)
    )
  }

  // useMemo를 사용해서 필요할 때만 연산하도록 설정, users가 변경될때만 count하도록 useMemo로 감싸줌
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
        onRemove={onRemove}
        changeColor={changeColor}
      />
      <div>활성 사용자 수 : {count}</div>
    </>
  )
}

export default App;
