import React from 'react';

const TextFieldCaption = ({label, id, styles}) => {
  if (!label) return null;
  return (
      <div className={styles['text-field__caption']}>
        <label className={styles['text-field__label']} htmlFor={id}>{label}</label>
      </div>
  )
};

export default TextFieldCaption;
