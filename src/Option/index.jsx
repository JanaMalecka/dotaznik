import React from 'react';
import Icon from '../Icon/index';
import './style.css';
//zadani
/* const Option = (props) => (
  <div className="option">
    <Icon type={props.type} />
    <div>{props.text}</div>
  </div>
);

export default Option; */

const Option = ({ type, text, onSelect }) => {
  /*  const handleClick = () =>  /* console.log(text);*/ /*onSelected(); */

  return (
    <div onClick={() => onSelect(type)} className="option">
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};

export default Option;
