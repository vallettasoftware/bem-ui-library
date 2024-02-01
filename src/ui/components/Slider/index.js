import React, {useState, useEffect, useRef} from 'react';
import styles from './Slider.module.scss';

const Slider = (props) => {
    const [value, setValue] = useState(props.defaultValue || 0);
    const [pointL, setPointL] = useState(null);
    const [pointR, setPointR] = useState(null);

    const ballElemLeft = useRef(null);
    const ballElemRight = useRef(null);
    const sliderElem = useRef(null)
    const lineElem = useRef(null)

    let point = 0;
    const min = props.min || 0;
    const max = props.max || 100;
    const txt = props.defaultText || 'Value'
    const isShowText = props.isHideText ? false : true;

    const step = 100 / (max - min);
    const [controlL, setControlL] = useState(props.range ? (props.defaultValue[0] - min) * 100 / (max - min) : (props.defaultValue - min) * 100 / (max - min) || 0);
    const [controlR, setControlR] = useState(props.range && (props.defaultValue[1] - min) * 100 / (max - min));
    

    useEffect(_=> {
        setPointL(ballElemLeft.current.getBoundingClientRect().left);
        if(props.range) {
            setPointR(ballElemRight.current.getBoundingClientRect().left);
        }
    }, [props.range, controlL, controlR])
    
    useEffect(_=> {
        if(!!props.onChange) {
            props.onChange(value)
        }
    }, [value, props])

    const onMouseMove = (e) => {
        const positionClick = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;

        if(props.range && (pointR - point < point - pointL)) {
            const val = positionClick - pointR - 9;
            const widthSlider = sliderElem.current.clientWidth;
            const x = (100 * val / widthSlider);
            
            if(controlR + x - step > controlL) {
                const z = controlR + x < 100 ? controlR + x : 100;
                setControlR(z);
                
                const newVal = (controlR + x) / step + min < max ? (controlR + x) / step + min : max;
                setValue([Math.round(controlL / step + min), Math.round(newVal)]);
            }
            
        } else {
            const val = positionClick - pointL - 9;
            const widthSlider = sliderElem.current.clientWidth;
            const x = (100 * val / widthSlider);

            if(controlL + x + step < controlR || !props.range) {
                const z = controlL + x;
                const newControlLVal = z > 0 && z < 100 ? controlL + x : z < 0 ? 0 : 100;
                setControlL(newControlLVal);

                const s = (controlL + x) / step + min;
                const newValue = s > min && s < max ? s : s <= min ? min : max;

                const newMinVal = Math.round((controlL + x) / step + min) > min ? Math.round((controlL + x) / step + min) : min;
                const newMaxVal = Math.round(controlR / step + min < max ? controlR / step + min: max);
                const newRangeValue = [newMinVal, newMaxVal];

                setValue(props.range ? newRangeValue : Math.round(newValue));
            }
        }
    }

    const handleSlide = (e) => {
        const mobEvent = e.type === 'touchstart'; 
        const initPos = mobEvent ? e.touches[0].clientX : e.clientX;
        point = initPos;
        if(e.target !== ballElemLeft.current && e.target !== ballElemRight.current) {
            const slider = sliderElem.current;
            const widthSlider = slider.clientWidth;
            const position = Math.abs(100 * (initPos - slider.getBoundingClientRect().left) / widthSlider);

            if(props.range && (controlR - position < position - controlL)) {
                setControlR(position);
                const newMin = Math.round(controlL * (max - min) / 100 + min );
                const newMax = Math.round(position * (max - min) / 100 + min );
                setValue([newMin, newMax]);
            } else {
                setControlL(position);
                const newMin = Math.round(position * (max - min) / 100 + min );
                const newMax = Math.round(controlR * (max - min) / 100 + min );
                const newVal = props.range ? [newMin, newMax] : newMin;
                setValue(newVal);
            }
        } 
        
        
        if(!mobEvent) {
            document.addEventListener('mousemove', onMouseMove)
            document.addEventListener('mouseup', _ => {
                document.removeEventListener('mousemove', onMouseMove)
            })
        } else {
            document.addEventListener('touchmove', onMouseMove)
            document.addEventListener('touchend', _=> {
                document.removeEventListener('touchmove', onMouseMove)
            })
        }
    }

    const handleMinChange = e => {
        const val = e.target.value;
        setValue(!props.range ? val : [val, value[1]]);        
    }

    const handleMaxChange = e => {
        const val = e.target.value;
        setValue([value[0], val])
    }

    const handleMinBlur = e => {
        const newVal = parseInt(e.target.value) >= min && parseInt(e.target.value) <= max ? parseInt(e.target.value) : parseInt(e.target.value) < min ? min : max;
        const newPos = newVal >= controlR ? controlR - 1 : newVal;
        setValue(!props.range ? newVal: [Math.round(newPos), Math.round(controlR)]);
        setControlL((newPos - min) * step)
    }

    const handleMaxBlur = e => {
        const val = parseInt(e.target.value);
        const newVal = val > controlL && val <= max ? val : val <= controlL ? controlL + 1 : max;
        setValue([value[0], Math.round(newVal)]);
        setControlR((newVal - min) * step)
    }

    return ( 
        <div className={styles["range-slider__wrap"]}>
            
            <div className={styles["range-slider__title"]}>
                {isShowText ? <>
                <span>{txt}:</span>{!props.range ? 
                    <input className={styles["range-slider__input"]} type="number" value={value} onChange={handleMinChange} onBlur={handleMinBlur} /> : 
                    <>
                    <input className={styles["range-slider__input"]} type="number" value={value[0]} onChange={handleMinChange} onBlur={handleMinBlur} />&ndash;
                    <input className={styles["range-slider__input"]} type="number" value={value[1]} onChange={handleMaxChange} onBlur={handleMaxBlur} />
                    </>
                }</> : null}
            </div> 
            <div className={styles["range-slider"]} ref={sliderElem} onMouseDown={handleSlide} onTouchStart={handleSlide}>
                <span 
                    className={`${styles["range-slider__control"]} ${styles["range-slider__control_left"]}`} 
                    style={{left: `${controlL}%`}}
                    ref={ballElemLeft}
                    data-value={props.range ? value[0] : value}
                    >
                </span>
                
                <div ref={lineElem} className={styles["range-slider__line"]} style={{left: `${props.range ? controlL : 0}%`, right: `${props.range ? 100 - controlR > 0 ? 100 - controlR : 0 : 100 - controlL}%`}}></div>
                {props.range ?
                <span 
                    className={`${styles["range-slider__control"]} ${styles["range-slider__control_right"]}`}
                    style={{left: `${controlR}%`}}
                    ref={ballElemRight}
                    data-value={value[1]}
                ></span>: null}
            </div>

            <div className={styles["range-slider__score"]}>
                <span className={styles["range-slider__score-item"]}>{min}</span>
                <span className={styles["range-slider__score-item"]}></span>
                <span className={styles["range-slider__score-item"]}>{(max + min) / 2}</span>
                <span className={styles["range-slider__score-item"]}></span>
                <span className={styles["range-slider__score-item"]}>{max}</span>
            </div>
        </div>
     );
}
 
export default Slider;