import React, {useState, useEffect} from 'react';
import {ModalButton} from './ModalButton';
import styles from './Modal.module.scss';

export const Modal = (props) => {
	const [show, setShow] = useState(props.visible);

	const close = () => {
		document.body.classList.remove('modal-open');
		document.body.classList.remove('modal-content-show');

		setTimeout(_=>{
			props.close();
		}, 450)
	}
	
	useEffect(_=>{
		if(props.visible) {
			setShow(true);
			setTimeout(_=>{
				document.body.classList.add('modal-open');
				document.body.classList.add('modal-content-show');
			}, 100)
		} else {
			document.body.classList.remove('modal-open');
			document.body.classList.remove('modal-content-show');
			
			setTimeout(_=>{
				setShow(false);
			}, 450)
		}

	}, [props.visible])

	return(
		<>
		{show ?
			<aside className={`${styles['modal__wrap']}`}>
				<section className={styles['modal__container']}>
					<div className={`${styles.modal} ${styles['modal_active']}`}>
						<button className={`${styles['modal__close']} icon-cross`} onClick={close}></button>
						<div className={styles['modal__head']}>
							<h3 className={styles['modal__title']}>{props.title} <span className={styles['modal__title-sub']}></span></h3>
						</div>


						<div className={styles["modal__desc"]}>
							{props.children}
						</div>
						{props.footer.length?
						<div className={styles['modal__buttons']}>
							
							{props.footer.map((item, index) => 
								<ModalButton key={index}>{item}</ModalButton>
							)}
						</div>:null}
					</div>
				</section>
				<div className={styles["modal__shadow"]} onClick={close}></div>
			</aside>:''}
		</>
    )
}