import React, { useState } from 'react';
import QuestionBody from '../QuestionBody/index';
import Option from '../Option/index';
import './style.css';
//zadani
/* const Question = (props) => (
  <div className="question">
    <QuestionBody 
      iconType="symbolQuestion" 
      text={props.text}
    />
    <div className="question__options">
      <Option type="smileyStrongYes" text="Souhlasím"/>
      <Option type="smileyYes" text="Spíše souhlasím"/>
      <Option type="smileyNeutral" text="Nevím"/>
      <Option type="smileyNo" text="Spíše nesouhlasím"/>
      <Option type="smileyStrongNo" text="Nesouhlasím"/>
    </div>
  </div>
);

export default Question; */

const Question = ({ text }) => {
  /*  const [answered, setAnswered] = useState(false);*/
  const handleSelect = (iconType) => {
    setAnswer(iconType);
  };
  const [answer, setAnswer] = useState('symbolQuestion');

  return (
    <div className="question">
      <QuestionBody iconType={answer} text={text} />
      <div className="question__options">
        <Option
          onSelect={handleSelect}
          type="smileyStrongYes"
          text="Souhlasím"
        />
        <Option
          onSelect={handleSelect}
          type="smileyYes"
          text="Spíše souhlasím"
        />
        <Option onSelect={handleSelect} type="smileyNeutral" text="Nevím" />
        <Option
          onSelect={handleSelect}
          type="smileyNo"
          text="Spíše nesouhlasím"
        />
        <Option
          onSelected={handleSelect}
          type="smileyStrongNo"
          text="Nesouhlasím"
        />
      </div>
    </div>
  );
};
export default Question;
