import cn from 'classnames';
import React from 'react';

const TextareaFieldNote = ({note, error, styles}) => {
  if (note || error) {
    return (
        <div className={cn(styles['textarea-field__note'], error && styles['textarea-field__note_error'])}>
          {note}
          {error}
        </div>
    )
  } else return null;
};

export default TextareaFieldNote;
