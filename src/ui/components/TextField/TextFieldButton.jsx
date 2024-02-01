import React from 'react';
import Icon from '../Icon';

const TextFieldButton = ({ button, buttonIcon, buttonOnClick, styles }) => {
  if (!button) return null;

  const buttonContent = buttonIcon ?
    <Icon content={buttonIcon} mix={styles['text-field__button-icon']}/> :
    button;

  return (
    <button
      title={buttonIcon && button}
      className={styles['text-field__button']}
      onClick={buttonOnClick}>
      {buttonContent}
    </button>
  )
};

export default TextFieldButton;
