import React from 'react';
import style from './style.module.css';
import Button from '../../components/Button/Button';
import ButtonSlim from '../../components/ButtonSlim/ButtonSlim'

const Offer = () => {
    return (
        <section className={style.offer}>
            <div className={style['offer-wrapper']}>
                <div className={style.title}>Зацікавились пропозиціями?</div>
                <Button path={'/'}>Дивитися більше</Button>
                <ButtonSlim path={'/'}>Замовити зараз</ButtonSlim>
            </div>
        </section>
    );
}

export default Offer;
