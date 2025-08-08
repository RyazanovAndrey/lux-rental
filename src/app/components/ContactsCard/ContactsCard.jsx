import React from 'react';
import style from './style.module.css';
import { Phone } from 'lucide-react';
import Image from 'next/image';

const ContactsCard = ({ image, title, contact }) => {
    return (
        <div className={style['contacts-card']}>
            <Image src={image} width={50} height={50} />
            <div>
                <p className={style['contacts-card-title']}>{title}</p>
                <p>{contact}</p>
            </div>
        </div>
    );
}

export default ContactsCard;
