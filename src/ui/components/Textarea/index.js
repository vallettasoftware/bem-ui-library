import React, {useState, useEffect, useRef} from 'react';
import styles from './Textarea.module.scss';
import autosize from 'autosize';

const Textarea = (props) => {
    const textarea = useRef(null);
    const [value, setValue] = useState(props.value)
    useEffect(_=> {
        autosize(textarea.current);
    }, [])

    const handleChange = e => {
        setValue(e.target.value)
    }

    return ( 
        <div className={`${styles["form-control"]} ${value ? styles["form-control_active"] : ''}`}>
            <textarea 
                ref={textarea} 
                className={styles["form-control__textarea"]} 
                required="required" 
                onChange={handleChange}
                defaultValue={props.value}
            >
            </textarea>
            <label className={styles["form-control__label"]}>
                {props.label}
            </label>
            <span className={styles["form-control__line"]}></span>
        </div>
     );
}
 
export default Textarea;