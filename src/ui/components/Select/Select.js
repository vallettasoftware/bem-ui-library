import React, {useState, useRef, useEffect} from 'react';
import styles from './Select.module.scss';

const Select = (props) => {

    const [show, setShow] = useState(false);
    const [name, setName] = useState(props.defaultValue || '');
    const [value, setValue] = useState(props.defaultValue);
    const [tags, setTags] = useState(props.defaultValue || []);
    const [filter, setFilter] = useState('');
    const [checkAll, setCheckAll] = useState(false);

    const mainEl = useRef(null);
    const inputEl = useRef(null);

    const multiselect = props.multiselect;

    const handleWrapClick = e => {
        setShow(!show)

        if(multiselect) {
            inputEl.current.focus();
        }
    }

    const handleValue = (val, name) => {
        
        if(multiselect) {
            const hasTag = tags.includes(name);
            setTags(hasTag ? tags.filter(item => item !== name) : [...tags, name]);

            if(!!props.onChange) {
                props.onChange(hasTag ? tags.filter(item => item !== name).join() : [...tags, name].join())
            }

            if(multiselect) {
                inputEl.current.focus();
            }
            
            setFilter('');
            setCheckAll(false);
        } else {
            setName(name);
            setShow(false);
            setValue(val);

            if(!!props.onChange) {
                props.onChange(val)
            }
        }
    }
    
    const items = React.Children.map(props.children, child => {
        return React.cloneElement(child, {
            handleClick: handleValue,
            active: multiselect ? tags : name,
            isCheckbox: props.checkbox,
            filter
        })
    });

    const handleRemove = (e, val) => {
        e.preventDefault();
        e.stopPropagation();
        setShow(false);
        setTags(tags.filter(item => item !== val));
        setCheckAll(false);
        
        if(!!props.onChange) {
            props.onChange(tags.filter(item => item !== val).join());
        }
    }
    
    const handleFilter = e => {
        setFilter(e.target.value);
    }

    const handleClickOutside = (e) => {
        if(!mainEl.current.contains(e.target)){
            setShow(false);
        }
        
        const clearFilter = setTimeout(_=>{
            clearTimeout(clearFilter);
            setFilter('')
        }, 300)
    }

    const handleCheckAll = _ => {

        if(checkAll) {
            setTags([]);
        } else {
            setTags(items.map(item => item.props.children));
        }
        setCheckAll(!checkAll);
    }

    useEffect(_=>{
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, []);

    return ( 
        <div ref={mainEl} className={`${styles['form-control']} ${show ? styles['show']:''} ${multiselect ? styles['form-control_multiple']:''} ${!!(!multiselect ? value : tags.length) ? styles['form-control_active']:''}`}>
            <div className={styles['form-control__wrap']} onClick={handleWrapClick}>
                <input 
                    type="hidden" 
                    className={styles["form-control__input"]}  
                    defaultValue={!multiselect ? value : tags.join()}
                />
                <label className={styles["form-control__label"]}>
                    {props.placeholder}
                </label>
                {!multiselect ?
                <span className={styles["form-control__value"]}>{name}</span>
                :
                <div className={styles["form-control__tags"]}>
                    <ul className={styles["tag__box"]}>
                        {tags.map((item, index) => (

                            <li className={`${styles["tag__item"]} ${styles["tag__item_category"]}`} key={index}>
                                <div className={styles["tag"]}>
                                    {item}
                                    <button className={`${styles["tag__clear"]} icon-clear`} onClick={e => handleRemove(e, item)}></button>
                                </div>
                            </li>
                        
                        ))}
                    </ul>

                    <input ref={inputEl} type="text" className={styles["form-control__tags-input"]} value={filter} onChange={handleFilter}/>
                </div>
                }
                <span className={styles["form-control__line"]}></span>
                <i className={`${styles["form-control__icon"]} icon-down show`}></i>
            </div>

            <aside className={styles["autocomplete__box"]} >
                <ul className={styles["autocomplete"]}>
                    {props.checkbox ? 
                        <li className={styles['autocomplete__item']} onClick={handleCheckAll}>
                            <label className={styles.checkbox}>
                                <input type="checkbox" 
                                    className={styles['checkbox__input']} 
                                    checked={checkAll}
                                    readOnly
                                />
                                <span className={styles['checkbox__icon']}></span>
                                Select All
                            </label>
                        </li>: null}
                    {items}
                </ul>
            </aside>
        </div>
     );
}
 
export default Select;