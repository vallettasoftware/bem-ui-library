import React, { useEffect, useState } from "react";
import "./App.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";

import Aside from "./template/components/Aside";
import Header from "./template/components/Header";

import { HomePage } from "./template/pages/HomePage";
import { CheckboxPage } from "./template/pages/CheckboxPage";
import { ButtonsPage } from "./template/pages/ButtonsPage";
import { RadioPage } from "./template/pages/RadioPage";
import { ModalPage } from "./template/pages/ModalPage";
import { InputsPage } from "./template/pages/InputsPages";
import TextAreaPage from "./template/pages/TextAreaPage";
import { IconsPage } from "./template/pages/IconsPage";
import { TabsPage } from "./template/pages/TabsPage";
import { AutoCompletePage } from "./template/pages/AutoCompletePage";
import { SwitchPage } from "./template/pages/SwitchPage";
import StepsPage from "./template/pages/StepsPage";
import SelectPage from "./template/pages/SelectPage";
import PaginationPage from "./template/pages/PaginationPage";
import SliderPage from "./template/pages/SliderPage";
import ThemeContext from "./template/components/ThemeContext";

const basename = process.env.NODE_ENV === "dev" ? "/bem-ui-library" : "/";

function App() {
  const defaultTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "barnas";
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      <ThemeContext.Provider value={theme}>
        <div className="app__box">
          <div className="app__mask"></div>
          <Aside />
          <div className="app">
            <Header setTheme={setTheme} current={theme} />
            <main className="app__content">
              <div className="content__wrp content__wrp_wh">
                <div className="content">
                  <Switch>
                    <Route path={basename} exact component={HomePage} />
                    <Route
                      path={`${basename}/buttons`}
                      component={ButtonsPage}
                    />
                    <Route
                      path={`${basename}/checkbox`}
                      component={CheckboxPage}
                    />
                    <Route path="/radio" component={RadioPage} />
                    <Route path="/modal" component={ModalPage} />
                    <Route path="/inputs" component={InputsPage} />
                    <Route path="/icons" component={IconsPage} />
                    <Route path="/tabs" component={TabsPage} />
                    <Route path="/autocomplete" component={AutoCompletePage} />
                    <Route path="/switch" component={SwitchPage} />
                    <Route path="/steps" component={StepsPage} />
                    <Route path="/select" component={SelectPage} />
                    <Route path="/pagination" component={PaginationPage} />
                    <Route path="/textarea" component={TextAreaPage} />
                    <Route path="/slider" component={SliderPage} />
                  </Switch>
                </div>
              </div>
            </main>
          </div>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
