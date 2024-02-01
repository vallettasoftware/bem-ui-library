import React from 'react';
import {useTheme} from '../../../template/hooks';
import cn from 'classnames';

const SwitchTabs = (
  {
    data, name,
    className, onChange,
    disabled
  }
) => {
  const styles = useTheme('SwitchTabs');

  const items = data.map(({label, id, checked, value}) => {
    return (
      <li className={styles['switch-tabs__item']} key={id}>
        <input
          disabled={disabled}
          defaultChecked={checked}
          className={styles['switch-tabs__input']}
          onChange={onChange}
          defaultValue={value}
          type="radio" name={name} id={id}/>

        <label className={styles['switch-tabs__label']} htmlFor={id}>
          {label}
        </label>
      </li>
    )
  });

  return (
    <ul className={cn(
      styles['switch-tabs'],
      disabled && styles['switch-tabs_disabled'],
      className
    )}>
      {items}
    </ul>
  )
};

export default SwitchTabs;
