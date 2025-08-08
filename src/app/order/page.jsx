'use client'
import DatePicker from 'react-datepicker';
import style from './style.module.css';
import { useEffect, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';

export default function Page() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [carsList, setCarsList] = useState([]);

    console.log(carsList)

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const name = formData.get('name')
        const tel = formData.get('tel')
        const carOrder = formData.get('carOrder')

        const newOrder = {
            name, tel, startDate, endDate, carOrder
        }

        console.log(newOrder)

        // const res = await fetch('http://localhost:3000/api/order', {
        //     method: 'POST',
        //     headers: { 'Content_type' : 'application/json' },
        //     body: JSON.stringify(newOrder)
        // })

    }

    useEffect(() => {
        fetch('http://localhost:3000/api/cars')
            .then(res => res.json())
            .then(data => setCarsList(data))
    }, [])

    return (
        <section className={style.order}>
            <div className="container">
                <h2 className={style.title}>Замовити <span>авто</span></h2>
                <form className={style['order-form']} onSubmit={handleSubmit}>

                    <div className={style['order-wrapper']}>
                        <p>Вибрати авто</p>
                        <select className={style['order-select']} name='carOrder'>
                            {carsList.map(item => (
                                <option value={item.title}>{item.title}</option>
                            ))}
                        </select>
                    </div>

                    <div className={style['order-date-wrapper']}>
                        <div className={style['order-date-title']}>
                            <p className=''>Дата початку оренди</p>
                            <div className={style['order-date']}>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>

                        <div className={style['order-date-title']}>
                            <p className=''>Дата початку оренди</p>
                            <div className={style['order-date']}>
                                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                            </div>
                        </div>
                    </div>

                    <input type="text" placeholder="Ваше ім'я" name='name' className={style['order-field']} />
                    <input type="tel" placeholder="Ваш телефон" name='tel' className={style['order-field']} />
                    <button className={style['order-form-btn']}>Замовити</button>
                </form>
            </div>
        </section>
    );
}