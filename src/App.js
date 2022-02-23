import React, {
  useReducer,
  useCallback,
  useRef,
  useMemo,
  createContext,
} from 'react';
import produce from 'immer';
import CreateUser from './CreateUser';
import useInputs from './useInputs';
import UserList from './UserList';
import Button from './components/Button';
import './App.scss'

function CountActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'shinchan',
      email: 'shinchan@gmail.com',
      active: false,
    },
    {
      id: 3,
      username: 'moshi',
      email: 'moshi@gmail.com',
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, (draft) => {
        draft.users.push(action.user);
      });
    // return {
    //   inputs: initialState.inputs, // input 초기화
    //   users: state.users.concat(action.user) // action으로 전달한 user 추가
    // }
    case 'TOGGLE_USER':
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id === action.id);
        user.active = !user.active;
      });
    case 'REMOVE_USER':
      return produce(state, (draft) => {
        const index = draft.users.findIndex((user) => user.id === action.id);
        draft.users.splice(index, 1);
      });
    // return {
    //   ...state,
    //   users: state.users.filter(user => user.id !== action.id)
    // }
    default:
      throw new Error('Unhandled action');
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = useInputs({
    username: '',
    email: '',
  });
  const { username, email } = form;
  const { users } = state;
  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current += 1;
    reset();
  }, [username, email, reset]);

  const count = useMemo(() => CountActiveUsers(users), [users]);

  return (
    // <UserDispatch.Provider value={dispatch}>
    //   <CreateUser
    //     username={username}
    //     email={email}
    //     onChange={onChange}
    //     onCreate={onCreate}
    //   />
    //   <UserList users={users} />
    //   <div>활성 사용자 수 : {count}</div>
    // </UserDispatch.Provider>
    <div className="App">
      <div className="buttons">
        <Button size="large">Button</Button>
        <Button>Button</Button>
        <Button size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">Button</Button>
        <Button color="gray">Button</Button>
        <Button color="gray" size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">Button</Button>
        <Button color="pink">Button</Button>
        <Button color="pink" size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button size="large" outline={true}>Button</Button>
        <Button color="gray" outline={true}>Button</Button>
        <Button color="pink" size="small" outline={true}>Button</Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth={true}>Button</Button>
        <Button size="large" color="gray" fullWidth={true}>Button</Button>
        <Button size="large" color="pink" fullWidth={true}>Button</Button>
      </div>
    </div>
  );
}

export default App;
