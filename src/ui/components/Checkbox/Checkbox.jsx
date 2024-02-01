import React from 'react';
import cn from 'classnames';
import {useTheme} from '../../../template/hooks';

const Checkbox = (
    {name, disabled, checked, value, className, onChange, ...props}
) => {
  const styles = useTheme('Checkbox');

  return (
      <div className={cn(
          styles['checkbox'],
          disabled && styles['checkbox_disabled'],
          className
      )}>
        <input
            type="checkbox"
            className={styles['checkbox__input']}
            disabled={disabled} checked={checked} value={value}
            onChange={onChange}
            id={name} name={name}/>

        <label
            className={styles['checkbox__label']}
            htmlFor={name}>{props.children}</label>
      </div>
  )
};

export default Checkbox;
