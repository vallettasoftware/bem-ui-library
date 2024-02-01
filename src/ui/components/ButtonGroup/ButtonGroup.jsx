import React from 'react';
import cn from 'classnames';
import {useTheme} from '../../../template/hooks';

const ButtonGroup = (
    {
      tag = 'div', direction = 'horizontal', tight,
      className, ...props
    }) => {
  const styles = useTheme('ButtonGroup');
  const Tag = tag;
  return (
      <Tag
          className={cn(
              styles['button-group'],
              direction && styles[`button-group_direction_${direction}`],
              tight && styles['button-group_tight']
          )} {...props}>
        {props.children.map((item, idx) => {
          return (
              <div className={styles['button-group__item']} key={idx}>
                {item}
              </div>
          )
        })}
      </Tag>
  );
};

export default ButtonGroup;
