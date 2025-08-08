import React from 'react';
import style from './style.module.css';

const ServicesCard = ({ id, title, desc }) => {
    return (
        <div className={style.card}>
            <div className={style['card-wrapper']}>
                <div className={style['card-number']}>{id}</div>
                <div className={style['card-title']}>{title}</div>
            </div>
            <p>{desc}</p>
        </div>
    );
}

export default ServicesCard;
