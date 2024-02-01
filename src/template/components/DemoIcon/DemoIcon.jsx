import React from 'react';
import cn from 'classnames';
import Icon from '../../../ui/components/Icon';
import { Code } from '../Code';

import './DemoIcon.scss';

const DemoIcon = ({ content, mix, setCurrent, current }) => {
  const handleChange = (content) => {
    setCurrent(content);
  };

  return (
    <div className={cn('demo-icon', current === content && 'demo-icon_opened')}>

      <div className="demo-icon__header" onClick={() => handleChange(content)}>
        <div className="demo-icon__preview">
          <Icon content={content} mix={mix}/>
        </div>
        <span className="demo-icon__title">{content}</span>
      </div>

      <Code mix="demo-icon__code">{`<Icon content="${content}"/>`}</Code>
    </div>
  );
};

export default DemoIcon;
