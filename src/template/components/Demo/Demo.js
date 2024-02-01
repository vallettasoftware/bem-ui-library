import React from 'react';
import DemoCode from './DemoCode';
import './Demo.scss';

const Demo = ({ title, preview, code, codeOpened = false, children}) => {

  const DemoTitle = () => {
    if (!title) return null;

    return (
      <header className="demo__header">
        <h2 className="demo__title">{title}</h2>
      </header>
    )
  };

  const DemoPreview = () => {
    if (!preview) return null;

    return (
      <div className="demo__preview">
        {preview}
        {children}
      </div>
    )
  };

  return (
    <section className="demo">
      <DemoTitle/>

      <div className="demo__content">
        <DemoPreview/>
        <DemoCode code={code} codeOpened={codeOpened}/>
      </div>
    </section>
  );
};

export default Demo;
