import React, {useEffect, useRef, useState} from 'react';
import cn from 'classnames';
import {useTheme} from '../../../template/hooks';

// Tabs mode = v1 || v2 || v3
const Tabs = ({children, defaultActive, direction = 'horizontal', mod = 'v1', ...props}) => {

  const styles = useTheme('Tabs');
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(0);
  const [pos, setPos] = useState(0);
  const tabsEl = useRef(null);

  useEffect(() => {
    let startPos = 0;
    if (!!defaultActive) {
      startPos = parseInt(defaultActive - 1);
      setActive(startPos);
      setPosition(startPos)
    }
    setWidth([...tabsEl.current.children][startPos].offsetWidth)
  }, [defaultActive, styles]);

  function handleClick(index, e) {
    setPosition(index);
    setWidth(e.target.offsetWidth);
    setActive(index);
  }

  function setPosition(i) {
    const position = [...tabsEl.current.children].reduce((acc, item, index) => {
      return index < i ? acc + item.offsetWidth : acc;
    }, 0);
    setPos(position)
  }

  return (
      <div
          className={cn(
              styles['tabs'],
              direction && styles[`tabs_direction_${direction}`],
              mod && styles[`tabs_mod_${mod}`]
          )}>
        <div className={styles['tabs__header']}>
          <ul className={styles['tabs__header-list']} ref={tabsEl}>
            {children.map(({props: {title}}, index) =>
                <li onClick={e => handleClick(index, e)}
                    className={cn(
                        styles['tabs__caption'],
                        index === active && styles['tabs__caption_active']
                    )}
                    key={index}>
                  {title}
                </li>
            )}
          </ul>
          {(direction === 'horizontal' && mod === 'v1') &&
          <span
              role="presentation"
              className={styles['tabs__active-line']}
              style={{width: width, transform: `translateX(${pos}px)`}}></span>}
        </div>

        <div className={styles['tabs__body']}>
          {children.map(({props: {children}}, index) =>
              <div key={index}
                   className={cn(
                       styles['tabs__body-item'],
                       index === active && styles['tabs__body-item_active']
                   )}>
                {children}
              </div>
          )}
        </div>
      </div>
  )
};

export default Tabs;
