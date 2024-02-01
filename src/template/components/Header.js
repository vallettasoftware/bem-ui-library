import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Header = ({setTheme, current}) => {
  return (
      <header className="app__header">
        <div className="app__logo">
          <a href="/" className="logo logo_mob">BarnasNorge.no</a>
        </div>

        {/* <div className="emotion-box">Welcome back, <a href="#">Peter F. Tschudi</a>, we have 2 new activities!</div> */}

        {/* <a href="#" className="header__link icon-world">
         Open the Site
        </a>
        <a href="#" className="header__link header__link_mb icon-switch">
          <span>Logout</span>
        </a> */}

        <div className="menu">
          <button className="menu__link js-menu-link icon-menu">
            <span>Menu</span>
          </button>
        </div>

        <ThemeSwitcher setTheme={setTheme} current={current}/>

      </header>
  )
};

export default Header;
