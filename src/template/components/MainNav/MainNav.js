import React from 'react';
import MenuItems from '../../const/MainNav';
import { NavLink } from 'react-router-dom';

import './MainNav.scss';

const MainNav = () => {

  const items = MenuItems.map(({ label, href }, idx) => {
    return (
      <li className="main-menu__item" key={idx}>
        <NavLink
          className="main-menu__link" exact
          activeClassName="main-menu__link_active"
          to={href}
        >
          {label}
        </NavLink>
      </li>
    )
  });

  return (
    <nav className="main-nav">
      <ul className="main-menu">
        {items}
      </ul>
    </nav>
  );
};

export default MainNav;
