import React from 'react';
import cn from 'classnames';
import Icon from '../../../ui/components/Icon';

import './BemButton.scss';

const BemButton = ({ icon, onlyIcon, href, onClick, ...props }) => {

  const Tag = href ? "a" : "button";

  const BtnIcon = () => {
    if (!icon) return null;

    return (
      <Icon content={icon} mix="bem-button__icon"/>
    )
  };

  return (
    <Tag
      href={href}
      className={cn('bem-button', onlyIcon && 'bem-button_only-icon')} onClick={onClick}
    >
      <BtnIcon/>
      <span className="bem-button__text">{props.children}</span>
    </Tag>
  );
};

export default BemButton;
