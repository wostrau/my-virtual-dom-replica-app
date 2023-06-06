import React from 'react';

import classes from './Button.module.css';

type ButtonPropsType = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
};

const Button = (props: ButtonPropsType) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
