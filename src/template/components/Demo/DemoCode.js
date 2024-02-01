import React, { useState } from 'react';
import cn from 'classnames';
import { Code } from '../Code';

const DemoCode = ({ code, codeOpened }) => {
  const [currentCodeOpened, setCodeOpened] = useState(codeOpened);

  if (!code) return null;

  const codeTitleHandle = () => {
    setCodeOpened(!currentCodeOpened);
  };

  return (
    <div className={cn('demo__code', 'code-preview', currentCodeOpened && 'code-preview_opened')}>
      <h3 className="code-preview__title" onClick={codeTitleHandle}>
        &#60;&#47;&#62; Code
        <i className="code-preview__handle icon icon-angle-down"></i>
      </h3>

      <Code mix="code-preview__content">{code}</Code>
    </div>
  )
};

export default DemoCode;
