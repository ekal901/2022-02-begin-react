import React from 'react';
class Hello extends React.Component {
  static defaultProps = {
    name: '이름없음',
  };

  render() {
    const { color, name, isSpecial } = this.props;
    const style = {
      color: color,
    };
    return (
      <div style={style}>
        {isSpecial && <strong>*</strong>}
        안녕하세요, {name}
      </div>
    );
  }
}
// function Hello({ color, name, isSpecial }) {
//     const style = {
//         color: color
//     }

//     return (
//         <div
//             style={style}
//         >
//             {isSpecial && <strong>*</strong>}
//             안녕하세요, {name}
//         </div>
//     )

// }

// Hello.defaultProps = {
//     name: 'noname'
// }

export default Hello;
