import React from 'react';

import MainNav from '../MainNav';

const AppAside = () => {
  return (
    <div className="app-aside app__aside">
      <div className="app__logo">
        <a href="/" className="logo">Valletta bemLib</a>
      </div>

      <MainNav/>
    </div>
  );
};

export default AppAside;
