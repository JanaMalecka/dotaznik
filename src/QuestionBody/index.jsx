import React from 'react';
import Icon from '../Icon/index';
import './style.css';
//zadani
/* const QuestionBody = (props) => (
  <div className="question__body">
    <p className="question__text">
      {props.text}
    </p>
    <Icon type={props.iconType} />
  </div>
);

export default QuestionBody; */

const QuestionBody = ({ text, type, iconType }) => (
  <div className="question__body">
    <p className="question__text">{text}</p>
    <Icon type={iconType} />
    {/*   <Icon type={answer} /> */}
  </div>
);

export default QuestionBody;
