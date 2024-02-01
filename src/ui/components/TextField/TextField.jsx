import React, {useState} from 'react';
import cn from 'classnames';
import {
  TextFieldButton,
  TextFieldCaption,
  TextFieldIcon,
  TextFieldMask,
  TextFieldNote,
  TextFieldStatusIcon
} from './index';
import {useTheme} from '../../../template/hooks';

const TextField = (
    {
      tag = 'div',
      id, name, type = 'text', value, disabled, placeholder,
      label, animateLabel, size,
      success, error, note,
      mask, icon,
      button, buttonOnClick, buttonIcon,
      onFocus, onBlur, onChange,
      className,
      ...props
    }
) => {
  const styles = useTheme('TextField');
  const [inputFocused, setFocus] = useState(false);
  const [inputFilled, setInputFilled] = useState(false);

  const onInputFocus = () => {
    setFocus(!inputFocused);
    onFocus && onFocus();
  };

  const onInputBlur = () => {
    setFocus(!inputFocused);
    onBlur && onBlur();
  };

  const onInputChange = (e) => {
    onChange && onChange(e);
    if (e.target.value) {
      setInputFilled(true);
    } else {
      setInputFilled(false);
    }
  };

  const Tag = tag;

  return (
      <Tag className={cn(
          styles['text-field'],
          size && styles[`button_${size}`],
          icon && styles['text-field_with-icon'],
          inputFocused && styles['text-field_focus'],
          success && styles['text-field_success'],
          error && styles['text-field_error'],
          disabled && styles['text-field_disabled'],
          animateLabel && styles['text-field_animated'],
          (inputFilled || value) && styles['text-field_filled']
      )}
           {...props}>

        <TextFieldCaption label={label} id={id} styles={styles}/>

        <div className={styles['text-field__control']}>
          <TextFieldIcon icon={icon} styles={styles}/>
          <TextFieldMask mask={mask} styles={styles}/>

          <input
              id={id} name={name} type={type}
              className={styles['text-field__input']}
              disabled={disabled}
              placeholder={placeholder}
              value={value}
              onChange={onInputChange}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              {...props}
          />

          <TextFieldStatusIcon success={success} error={error} styles={styles}/>

          <TextFieldButton
              button={button} buttonIcon={buttonIcon}
              buttonOnClick={buttonOnClick} styles={styles}/>
        </div>

        <TextFieldNote note={note} error={error} styles={styles}/>
      </Tag>
  );
};

export default TextField;
