import React from 'react';
import './ThemeSwitcher.scss';
import cn from 'classnames';

const ThemeSwitcher = ({ setTheme, current, mix }) => {
  const themes = [
    { name: 'barnas', label: 'Barnas theme' },
    { name: 'blue', label: 'Blue theme' }
  ];


  const itemList = themes.map(item => {
    return (
      <li className="theme-switcher__item" key={item.name}>
          <span
            className={cn('theme-switcher__button', { 'theme-switcher__button_active': current === item.name })}
            onClick={() => setTheme(item.name)}>
            {item.label}
          </span>
      </li>
    )
  });

  return (
    <ul className={cn('theme-switcher', mix)}>
      {itemList}
    </ul>
  );
};

export default ThemeSwitcher;
