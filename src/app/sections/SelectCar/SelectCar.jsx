import React from 'react';
import style from './style.module.css';
import RentCar from '../../components/RentCar/RentCar';

const SelectCar = () => {
    return (
        <section className={style['select-car']}>
                <div className={style['select-car-wrapper']}>
                    <h3 className={style['select-car-title']}>Вибрати та <span>орендувати автомобіль</span></h3>
                    <RentCar />
                </div>
        </section>
    );
}

export default SelectCar;


