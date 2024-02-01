import React from 'react';
import styles from './Button.module.scss';

export const ButtonLink = (props) => {
    
    const click = (e) => {
        if(!props.href){
            e.preventDefault();
        }

        if(props.onClick) {
            props.onClick(e)
        }
    }

    return(
        <a 
            href={props.href ? props.href : '#'}
            onClick={click}
            className={`${!!styles[props.type] ? styles[props.type] : styles.btn} ${props.disabled ? styles['disabled'] : ''}`}
            disabled={props.disabled}
            style={props.style ? props.style: {}}
            {...(props.target && { target: '_blank'})}
            >
            {!!props.icon ?
            <i className={`${styles['button__icon']} icon-${props.icon}`}></i> : null}  
            {!!props.isLoading ?
            <i className={`${styles['button__icon']} ${styles['button__icon_spinner']} icon-spinner`}></i> : null}
            {props.value}
        </a> 
    )
}