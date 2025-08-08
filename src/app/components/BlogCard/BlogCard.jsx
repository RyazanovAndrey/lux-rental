import React from 'react';
import style from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ _id, image, title, content, date }) => {

    const currentDate = new Date(date)
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }

    return (
        <div className={style['blog-card']}>
            <div className={style['blog-image']}>
                <Image src={image} width={380} height={300} />
            </div>
            <div className={style['blog-wrapper']}>
                <p className={style['blog-date']}>{currentDate.toLocaleDateString('uk-Ua', options)}</p>
                <Link href={`/blog/${_id}`} className={style['blog-title']}>{title}</Link>
                <p className={style['blog-desc']}>{content}</p>
            </div>
        </div>
    );
}

export default BlogCard;

