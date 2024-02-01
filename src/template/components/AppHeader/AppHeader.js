import React from 'react';
import ThemeSwitcher from '../ThemeSwitcher';
import BemButton from '../BemButton';

import './AppHeader.scss';

const AppHeader = ({ setTheme, current }) => {
  return (
    <header className="app__header app-header">

      <ThemeSwitcher
        mix="app-header__theme-switcher"
        setTheme={setTheme}
        current={current}
      />

      {/*<ul className="app-header__links header-links">*/}
      {/*  <li className="header-links__item">*/}
      {/*    <BemButton href="#" icon="github">*/}
      {/*      View on github*/}
      {/*    </BemButton>*/}
      {/*  </li>*/}
      {/*  <li className="header-links__item">*/}
      {/*    <BemButton href="#" icon="download" onlyIcon={true}>*/}
      {/*      Download*/}
      {/*    </BemButton>*/}
      {/*  </li>*/}
      {/*</ul>*/}

    </header>
  )
};

export default AppHeader;
