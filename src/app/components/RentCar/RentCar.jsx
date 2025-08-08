import React from 'react';
import style from './style.module.css';
import { Calendar, ChevronDown } from 'lucide-react';

const RentCar = () => {
    return (
        <section className=''>
            <div className="container">
                <div className={style['rent-car']}>
                    <div className={style['rent-box']}>Вибрати тип машини<ChevronDown className={style.icon} /></div>
                    <div className={style['rent-box']}>Дата початку оренди<Calendar className={style.icon} /></div>
                    <div className={style['rent-box']}>Дата кінця оренди<Calendar className={style.icon} /></div>
                </div>
            </div>
        </section>
    );
}

export default RentCar;
