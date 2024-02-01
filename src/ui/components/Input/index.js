import React, {useState, useEffect} from 'react';
import styles from './Input.module.scss';
import validation from './Validation';

export const Input = (props) => {

    const [value, setValue] = useState('');
    const [error, setError] = useState();

    const hasValidation = props.validation && props.validation.length;
    const hasError = !!error && error.length;

    useEffect(_=> {
        if(!!props.value) {
            setValue(props.value)
        }
    }, [props.value]);

    const changeInput = (e) => {
       setValue(e.target.value);
       
       if(hasValidation) {
            setError( props.validation.reduce((acc, item) => {
                return validation(item, e.target.value) ? [...acc, item.message] : acc;
            }, []))
        }
    }

    return(
        <div className={`${styles['form-control']} ${value ? styles['form-control_active']:''} ${ hasError ? styles['form-control_error'] : ''}`}>
            <div className={styles["form-control__wrap"]}>
                <input 
                    type={props.type} 
                    className={styles["form-control__input"]} 
                    defaultValue={value}
                    required={!!props.required} 
                    onChange={changeInput}
                />
                <label className={styles["form-control__label"]}>{props.label}</label>
                <span className={styles["form-control__line"]}></span>
                {props.isLoading ?
                <i className={`${styles['form-control__icon']} ${styles['form-control__icon_spinner']} icon-spinner`}></i> : null}
            </div>
            
            {hasError ?
                <div className={styles["form-control__message-box"]}>
                    {error.map(item => (
                        <div key={Math.random()} className={styles["form-control__message"]}>
                            {item}
                        </div>
                    ))} 
            </div> : null
            }
        </div>
    )
}