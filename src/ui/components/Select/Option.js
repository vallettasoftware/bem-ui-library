import React from 'react';
import styles from './Select.module.scss';

const Option = (props) => {
    const isActive = Array.isArray(props.active) ? props.active.includes(props.children) : props.active === props.children;

    return (
        <>
        {props.children.indexOf(props.filter) !== -1 ? 
        <li 
            onClick={e => props.handleClick(props.value, props.children)} 
            value={props.value} 
            className={`${styles['autocomplete__item']} ${isActive ? styles['autocomplete__item_active']:''}`}>
            {props.isCheckbox ?
            <label className={`${styles.checkbox} ${!!props.disabled ? styles['checkbox_disabled']:''}`}>
                <input type="checkbox" 
                    className={styles['checkbox__input']} 
                    disabled={!!props.disabled} 
                    checked={isActive}
                    readOnly
                />
                <span className={styles['checkbox__icon']}></span>
            </label> : null}
            {props.children}
        </li>:null}
        </>
    );
}
 
export default Option;