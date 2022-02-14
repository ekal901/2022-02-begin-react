import React, {useState} from 'react'

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    })

    const { name, nickname } = inputs

    const onChange = (e) => {
        setInputs({
            ...inputs, // 원래 값
            [e.target.name]: e.target.value // 변경할 값
        })
    }

    const onReset = (e) => {
        setInputs({
            name: '',
            nickname: ''
        })
    }

    return (
        <div>
            <input 
                placeholder='이름' 
                name='name' 
                onChange={onChange} 
                value={name} 
            />
            <input 
                placeholder='닉네임' 
                name='nickname' 
                onChange={onChange} 
                value={nickname}
             />
            <button onClick={onReset}>초기화</button>
            <div>
                <strong>값 : </strong>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample