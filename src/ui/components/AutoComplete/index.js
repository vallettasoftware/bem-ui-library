import React, {useState} from 'react';
import styles from './AutoComplete.module.scss';

export const AutoComplete = (props) => {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState('');
    const [filtered, setFiltered] = useState([]);
    const [initialColl, setInit] = useState([]);

    const getData = () => {
        setInit([...props.data])
        setShow(true);

        if(!!value) {
            setFiltered(initialColl.filter(item => item.indexOf(value) !== -1 ));
        }
    }
    
    const search = (e) => {
        setValue(e.target.value);
        setFiltered(initialColl.filter(item => item.indexOf(e.target.value) !== -1 ));
    }

    const getHightLightTitle = (title) => {
        const position = title.indexOf(value);
        
        return(
            <>
                {title.slice(0, position)}
                <mark className={styles["autocomplete__mark"]}>
                    {title.slice(position, position + value.length)}
                </mark>
                {title.slice(position + value.length)}
            </>
        )
    }

    const chooseValue = (e) => {
        
        const elm = e.target.className === styles['autocomplete__mark'] ? e.target.parentNode : e.target;

        setValue(elm.textContent);
        
        const clear = setTimeout(_ => {
            clearInterval(clear)
            setFiltered([]);
        }, 400)
    }

    return(
        <>
        <div className={`${styles['form-control']} ${show ? styles['show']:''}  ${value ? styles['form-control_active']:''}`}>
            <div className={styles['form-control__wrap']}>
                <input 
                    type="text" 
                    className={styles["form-control__input"]} 
                    value={value} 
                    onFocus={getData}
                    onChange={search} 
                    onBlur={_ => setShow(false)}
                />
                <label className={styles["form-control__label"]}>
                    {props.label}
                </label>
                <span className={styles["form-control__line"]}></span>
                <i className={`${styles["form-control__icon"]} icon-down show`}></i>
            </div>

            <aside className={styles["autocomplete__box"]} >
                <ul className={styles["autocomplete"]}>
                    {filtered.map((item) =>(
                        <li className={styles["autocomplete__item"]} 
                            key={Math.random()}
                            onMouseDown={chooseValue}
                        >
                            {getHightLightTitle(item)}
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
        </>
    )
}
