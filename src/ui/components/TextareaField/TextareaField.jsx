import React, {useState} from 'react';
import {useTheme} from '../../../template/hooks';
import cn from 'classnames';
import {TextareaFieldNote, TextareaFieldCaption} from './index';
import TextareaAutosize from 'react-autosize-textarea';

const TextareaField = (
  {
    tag = 'div',
    id, name, type = 'text', value, disabled, placeholder,
    label, animateLabel, size,
    success, error, note,
    onFocus, onBlur, onChange,
    className,
    ...props
  }
) => {
  const [textareaValue, setValue] = useState(value);
  const [textareaFocused, setFocus] = useState(false);
  const [textareaFilled, setTextAreaFilled] = useState(false);

  const onTextareaFocus = () => {
    setFocus(!textareaFocused);
    onFocus && onFocus();
  };

  const onTextareaBlur = () => {
    setFocus(!textareaFocused);
    onBlur && onBlur();
  };

  const onTextareaChange = (e) => {
    onChange && onChange(e);
    if (e.target.value) {
      setTextAreaFilled(true);
      setValue(e.target.value);
    } else {
      setTextAreaFilled(false);
      setValue('');
    }
  };

  const Tag = tag;
  const styles = useTheme('TextareaField');

  return (
    <Tag
      className={cn(
        styles['textarea-field'],
        textareaFocused && styles['textarea-field_focus'],
        animateLabel && styles['textarea-field_animated'],
        error && styles['textarea-field_error'],
        disabled && styles['textarea-field_disabled'],
        (textareaFilled || value || props.children) && styles['textarea-field_filled']
      )}
    >

      <TextareaFieldCaption label={label} styles={styles} id={id}/>
      <div className={styles['textarea-field__control']}>

        <TextareaAutosize
          id={id}
          name={name}
          placeholder={placeholder}
          rows={2}
          className={styles['textarea-field__textarea']}
          onFocus={onTextareaFocus}
          onBlur={onTextareaBlur}
          onChange={onTextareaChange}
          defaultValue={props.children}
          value={textareaValue}
        />
      </div>
      <TextareaFieldNote styles={styles} note={note} error={error}/>
    </Tag>
  );
};

export default TextareaField;
