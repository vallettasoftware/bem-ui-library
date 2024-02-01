import React from 'react';
import cn from 'classnames';
import useTheme from '../../../template/hooks/useTheme';
import Icon from '../Icon';

const Button = ({size, mod = 'base', icon, className, isLoading, ...props}) => {
  const styles = useTheme('Button');

  const Tag = props.href ? "a" : "button";

  const buttonIcon = icon ? <Icon content={icon} mix={styles['button__icon']} />: null;
  const buttonText = props.children ? <span className={styles.button__text}>{props.children}</span>: null;
  const loadingIcon = isLoading ?
      <i className={`${styles['button__icon']} ${styles['button__icon_spinner']} icon-spinner`}></i> : null;

  return (
      <Tag className={cn(
          styles.button,
          props.disabled && styles.button_disabled,
          mod && styles[`button_mod_${mod}`],
          size && styles[`button_${size}`],
      )}
           {...props}>
        {buttonIcon}
        {loadingIcon}
        {buttonText}
      </Tag>
  );
};

export default Button;
