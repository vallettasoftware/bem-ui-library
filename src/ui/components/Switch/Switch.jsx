import React from 'react';
import {useTheme} from '../../../template/hooks';
import cn from 'classnames';

const Switch = (
  {
    name, disabled, checked, value,
    className, onChange, dynamicLabels,
    labels, ...props
  }
) => {
  const styles = useTheme('Switch');

  return (
    <div className={cn(
      styles['switch'],
      disabled && styles['switch_disabled'],
      dynamicLabels && styles['switch_dynamic-labels'],
      className
    )}>
      <input
        type="checkbox"
        className={styles['switch__input']}
        defaultChecked={checked}
        disabled={disabled} value={value}
        onChange={onChange}
        id={name} name={name}
      />

      <label
        data-on="on"
        data-off="off"
        className={styles['switch__label']}
        htmlFor={name}>{props.children}</label>
    </div>
  )
};

export default Switch;
