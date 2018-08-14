import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <div>
      <div className="widget-header">
          <h3 className="widget-header-title">Your options</h3>
          <button className="button--link"onClick={props.handleDeleteOptions}>
          <i className="far fa-trash-alt"></i> All</button>
      </div>
      {props.options.length === 0 && <p className="widget-message">Please add an option to get started!</p>}
      {props.options.map((option,index) => (
          <Option
            key={option}
            count={index+1}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
      
    </div>
  );
};

export default Options;
