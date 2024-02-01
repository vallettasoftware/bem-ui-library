import React from 'react';

const TextareaFieldCaption = ({label, id, styles}) => {
  if (!label) return null;
  return (
      <div className={styles['textarea-field__caption']}>
        <label className={styles['textarea-field__label']} htmlFor={id}>{label}</label>
      </div>
  )
};

export default TextareaFieldCaption;
