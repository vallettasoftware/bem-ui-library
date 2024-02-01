import React, { useEffect, useState } from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppHeader from '../AppHeader';

import { HomePage } from '../../pages/HomePage';
import { CheckboxPage } from '../../pages/CheckboxPage';
import { ButtonsPage } from '../../pages/ButtonsPage';
import { RadioPage } from '../../pages/RadioPage';
import { ModalPage } from '../../pages/ModalPage';
import { InputsPage } from '../../pages/InputsPages';
import TextAreaPage from '../../pages/TextAreaPage';
import { IconsPage } from '../../pages/IconsPage';
import { TabsPage } from '../../pages/TabsPage';
import { AutoCompletePage } from '../../pages/AutoCompletePage';
import { SwitchPage } from '../../pages/SwitchPage';
import StepsPage from '../../pages/StepsPage';
import SelectPage from '../../pages/SelectPage';
import PaginationPage from '../../pages/PaginationPage';
import SliderPage from '../../pages/SliderPage';
import AppAside from '../AppAside';
import ThemeContext from '../../../template/components/ThemeContext';

function App() {

  const defaultTheme = localStorage.getItem('theme')
    ? localStorage.getItem('theme')
    : 'barnas';

  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    setTheme(theme);
    localStorage.setItem('theme', theme)
  }, [theme]);

  return (
    <Router>
      <ThemeContext.Provider value={theme}>
        <main className="app__main">
          <AppHeader setTheme={setTheme} current={theme}/>

          <div className="app__content">
            <Switch>
              <Route path="/" exact component={HomePage}/>
              <Route path="/buttons" component={ButtonsPage}/>
              <Route path="/checkbox" component={CheckboxPage}/>
              <Route path="/radio" component={RadioPage}/>
              <Route path="/modal" component={ModalPage}/>
              <Route path="/inputs" component={InputsPage}/>
              <Route path="/icons" component={IconsPage}/>
              <Route path="/tabs" component={TabsPage}/>
              <Route path="/autocomplete" component={AutoCompletePage}/>
              <Route path="/switch" component={SwitchPage}/>
              <Route path="/steps" component={StepsPage}/>
              <Route path="/select" component={SelectPage}/>
              <Route path="/pagination" component={PaginationPage}/>
              <Route path="/textarea" component={TextAreaPage}/>
              <Route path="/slider" component={SliderPage}/>
            </Switch>
          </div>
        </main>

        <aside className="app__sidebar">
          <AppAside/>
        </aside>

      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
