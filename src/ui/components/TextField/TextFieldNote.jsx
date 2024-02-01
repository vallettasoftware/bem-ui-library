import cn from 'classnames';
import React from 'react';

const TextFieldNote = ({note, error, styles}) => {
  if (note || error) {
    return (
        <div className={cn(styles['text-field__note'], error && styles['text-field__note_error'])}>
          {note}
          {error}
        </div>
    )
  } else return null;
};

export default TextFieldNote;
