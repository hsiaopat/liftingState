import * as React from 'react';

export const EnterPayment = (props) => {
  return (
    <input
      type="number"
      onChange={(e) => props.inputChanged(e.target.value)}
    ></input>
  );
};
