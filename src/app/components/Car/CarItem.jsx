import React from 'react';
import style from './style.module.css';
import Image from 'next/image';
import { DoorClosed, Luggage, Settings, Users } from 'lucide-react';
import Button from '../Button/Button'

const CarItem = ({ _id, image, title, people, doors, trans, bags, price }) => {
    return (
        <div className={style.card}>
            <Image src={image} width={380} height={214} alt='' />
            <div className={style['card-wrapper']}>
                <div className={style.brand}>{title}</div>
                <div className={style['items-wrapper']}>
                    <div className={style['card-item']}>
                        <Users strokeWidth={1} className={style['card-icon']} />
                        <span className={style['users-count']}>{people}</span>
                    </div>
                    <div className={style['card-item']}>
                        <DoorClosed strokeWidth={1} className={style['card-icon']} />
                        <span className={style['doors-count']}>{doors}</span>
                    </div>
                    <div className={style['card-item']}>
                        <Settings strokeWidth={1} className={style['card-icon']} />
                        <span className={style['doors-count']}>{trans}</span>
                    </div>
                    <div className={style['card-item']}>
                        <Luggage strokeWidth={1} className={style['card-icon']} />
                        <span className={style['doors-count']}>{bags}</span>
                    </div>
                </div>
                <div className={style['cart-info']}>
                    <Button id={_id} path={`/cars/${_id}`}>Детальніше</Button>
                    <div className={style['cart-price']}><span>{price} ₴</span> / день </div>
                </div>
            </div>
        </div>
    );
}

export default CarItem;
