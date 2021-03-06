import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
  console.log('createUser');
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button type="button" onClick={onCreate}>
        등록
      </button>
    </div>
  );
}

// React.memo : props가 바뀌었을 때만 rerendering
export default React.memo(CreateUser);
