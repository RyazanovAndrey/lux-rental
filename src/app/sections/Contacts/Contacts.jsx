import React from 'react';
import style from './style.module.css';
import ContactsCard from '../../components/ContactsCard/ContactsCard'

const Contacts = () => {

    const contactsList = [
        { title: 'Дзвонить нам', contact: '+38 066 178-89-85', image: "/icons/call-contacts.svg" },
        { title: 'Пишить нам', contact: 'test@gmail.com', image: "/icons/email-contacts.svg" },
        { title: 'Наша адреса', contact: 'м. Київ', image: "/icons/location-contacts.svg" },
    ]

    return (
        <section className={style.contacts}>
            <div className="container">
                <div className={style['contacts-wrapper']}>
                    {contactsList.map(item => (
                        <ContactsCard {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contacts;
