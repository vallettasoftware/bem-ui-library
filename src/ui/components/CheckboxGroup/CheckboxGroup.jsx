import React from 'react';
import cn from 'classnames';
import {useTheme} from '../../../template/hooks';

const CheckboxGroup = (
    {
      tag = 'div', label, direction = 'horizontal', tight,
      className, ...props
    }) => {
  const styles = useTheme('CheckboxGroup');
  const Tag = tag;
  return (
      <Tag
          className={cn(
              styles['checkbox-group'],
              direction && styles[`checkbox-group_direction_${direction}`],
          )} {...props}>

        {label && <span className={styles['checkbox-group__label']}>{label}</span>}

        {props.children.map((item, idx) => {
          return (
              <div className={styles['checkbox-group__item']} key={idx}>
                {item}
              </div>
          )
        })}
      </Tag>
  );
};

export default CheckboxGroup;
