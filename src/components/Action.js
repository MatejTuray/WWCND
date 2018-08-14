import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        className="big-button"
      >
        What would Chuck do?
      </button>
    </div>
  );
};

export default Action;
