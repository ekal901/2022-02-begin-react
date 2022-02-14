import React from 'react'

function Hello({ color, name, isSpecial }) {
    const style = {
        color: color
    }

    return (
        <div 
            style={style}
        >
            {isSpecial && <strong>*</strong>}
            안녕하세요, {name}
        </div>
    )
    
}

Hello.defaultProps = {
    name: 'noname'
}

export default Hello