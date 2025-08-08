import React from 'react';
import style from './style.module.css';
import Image from 'next/image';

const CategoryItem = ({ image, title }) => {
    return (
        <div className={style['category-card']}>
            <Image src={image} width={380} height={215} />
            <p className={style['category-title']}>{title}</p>
            <div className={style.overlay}></div>
        </div>
    );
}

export default CategoryItem;
