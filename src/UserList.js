import React, { useEffect } from 'react'

const User = React.memo(function User({user, onRemove, changeColor}) {
    // useEffect(함수, deps);
    // useEffect(() => {
        // props -> state
        // REST API
        // setInterval, setTimeout
        // console.log('컴포넌트가 화면에 나타남')
        // console.log('user 값이 설정됨')
        // console.log(user)
        // return () => {
            // clearInterval, clearTimeout
            // 라이브러리 인스턴스 제거
            // console.log('컴포넌트가 화면에 사라짐')
            // console.log('user 값이 바뀌기 전')
            // console.log(user)
        // }
    // }, [user]) // [user]의 등록, 삭제, 수정일때 출력됨
    const { username, email, id, active } = user
    console.log(user)

    return (
        <div>
            <strong 
                style={{
                    'color': active ? 'green' : 'black', 
                    cursor: 'pointer'
                }} 
                onClick={() => changeColor(id)}
            >
                {username}
            </strong>
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
});

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

export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users)