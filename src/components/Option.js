import React from 'react';

const Option = (props) => {
  return (
    <div className="option">
      <p className="option__text">{props.count}. {props.optionText}</p>
        <button className="button--link"      
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}><i className="far fa-trash-alt"></i></button>
      
    </div>
  );
};

export default Option;
