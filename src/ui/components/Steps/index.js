import React from 'react';
import styles from './Steps.module.scss';

const Steps = (props) => {


    return ( 
        <ul className={styles["stepper"]}>
            {props.items.map((item, index) => (
                <li key={index} 
                    className={`${styles["stepper__item"]} 
                                ${props.current === index ? styles["stepper__item_active"]:""} 
                                ${props.current > index ? styles["stepper__item_passed"]:""}`}>
                    {item}
                </li>
            ))}

            {/* <li class="stepper__item stepper__item_alert">
            Addresses
            </li>

            <li class="stepper__item stepper__item_active">
            Specification
            </li>

            <li class="stepper__item">
            Scheduler
            </li>

            <li class="stepper__item">
            Extra
            </li> */}

        </ul>
     );
}
 
export default Steps;