import React from 'react';
import Icon from '../Icon';

const TextFieldIcon = ({ icon, styles }) => {
  if (!icon) return null;
  return (
    <div className={styles['text-field__icon-box']}>
      <Icon content={icon} mix={styles['text-field__icon']}/>
    </div>
  )
};

export default TextFieldIcon;
