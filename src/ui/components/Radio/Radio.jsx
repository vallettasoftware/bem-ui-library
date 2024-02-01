import React from 'react';
import cn from 'classnames';
import {useTheme} from '../../../template/hooks';

const Radio = (
    {id, name, disabled, checked, defaultChecked, value, className, onChange, ...props}
) => {
  const styles = useTheme('Radio');
  return (
      <div className={cn(
          styles['radio'],
          disabled && styles['radio_disabled'],
          className
      )}>
        <input
            type="radio"
            className={styles['radio__input']}
            disabled={disabled} checked={checked} value={value}
            defaultChecked={defaultChecked}
            onChange={onChange}
            id={id} name={name}/>

        <label
            className={styles['radio__label']}
            htmlFor={id}>{props.children}</label>
      </div>
  )
};

export default Radio;
