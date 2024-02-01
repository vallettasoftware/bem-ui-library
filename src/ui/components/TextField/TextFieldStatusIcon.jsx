import React from 'react';

const TextFieldStatusIcon = ({success, error, styles}) => {

  if (success || error) {

    const icon = success ? 'ok' : 'cross';
    //return <i className={`${styles['text-field__icon']} icon-${icon}`}></i>
    return (
        <i className={`${styles['text-field__status-icon']} icon-${icon}`}></i>
    )
  } else return null

};

export default TextFieldStatusIcon;
