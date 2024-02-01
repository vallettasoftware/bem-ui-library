import React from 'react';

const TextFieldMask = ({mask, styles}) => {
  if (!mask) return null;
  return <span className={`${styles['text-field__mask']}`}>{mask}</span>
};

export default TextFieldMask;
