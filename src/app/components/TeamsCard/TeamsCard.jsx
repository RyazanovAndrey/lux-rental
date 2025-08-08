import React from 'react';
import style from './style.module.css';
import Image from 'next/image';
import { CircleAlert } from 'lucide-react';

const TeamsCard = ({ title, job, image }) => {

    return (
        <div className={style['teams-card']}>
            <div className={style['teams-image']}>
                <Image src={image} width={380} height={380} />
            </div>
            <div className={style.overlay}></div>
            <div className={style['teams-content']}>
                <CircleAlert />
                <div>
                    <p className={style['teams-title']}>{title}</p>
                    <p>{job}</p>
                </div>
            </div>
        </div>
    );
}

export default TeamsCard;
