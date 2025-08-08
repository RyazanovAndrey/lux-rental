import { DoorClosed, Luggage, Settings, Users } from 'lucide-react';
import style from './style.module.css';
import { Cute_Font } from "next/font/google";
import Link from 'next/link';

async function getCar(id) {
    const res = await fetch(`http://localhost:3000/api/cars/${id}`)
    return res.json()
}

const cuteFont = Cute_Font({
    subsets: ["latin"],
    weight: ['400']
});

export const generateMetadata = async ({ params }) => {
    const { id } = await params
    const car = await getCar(id)

    return {
        title: car.title
    }
}


export default async function Page({ params }) {

    const { id } = await params
    const car = await getCar(id)

    return (
        <>
            <section style={{ background: `linear-gradient(0deg,rgba(30, 30, 30, 1) 0%, rgba(30, 30, 30, 0.8) 50%, rgba(30, 30, 30, 1) 100%), url('${car.image}')` }} className={style['car-single']}>
                <div className="container">
                    <p>{car.category}</p>
                    <p className={`${cuteFont.className} ${style['car-title']}`}>{car.title}</p>
                    <div className={style['car-wrapper']}>
                        <div className={style['car-col']}>
                            <p className={style['car-content']}>{car.desc}</p>
                            <div className="">
                                <div className={style['car-order']}>Умови оренди</div>
                                <p className={style['car-order-item']}>Стаж водія: вік 21 рік та наявність водійського стажу не менше 2-3 років.</p>
                                <p className={style['car-order-item']}>Необхідні документи: паспорт, посвідчення водія категорії "B" та банківська картка</p>
                                <p className={style['car-order-item']}>Страхування: обов'язкова наявність страхового полісу</p>
                                <p className={style['car-order-item']}>Термін оренди: мінімальний термін оренди 24 години.</p>
                            </div>
                        </div>
                        <div className={style['car-col']}>
                            <div className={style['car-info']}>
                                <p className={style['car-info-price']}>{car.price} ₴ / день</p>

                                <div className={style['car-wrapper-item']}>
                                    <div className={style['car-item']}>
                                        <Users strokeWidth={1} className={style['card-icon']} />
                                        <p>Пасажирів</p>
                                    </div>
                                    <div className="">
                                        <span className={style['users-count']}>{car.people}</span>
                                    </div>
                                </div>

                                <div className={style['car-wrapper-item']}>
                                    <div className={style['car-item']}>
                                        <DoorClosed strokeWidth={1} className={style['card-icon']} />
                                        <p>Дверей</p>
                                    </div>
                                    <div className="">
                                        <span className={style['users-count']}>{car.doors}</span>
                                    </div>
                                </div>

                                <div className={style['car-wrapper-item']}>
                                    <div className={style['car-item']}>
                                        <Settings strokeWidth={1} className={style['card-icon']} />
                                        <p>Трансмісія</p>
                                    </div>
                                    <div className="">
                                        <span className={style['users-count']}>{car.trans}</span>
                                    </div>
                                </div>

                                <div className={style['car-wrapper-item']}>
                                    <div className={style['car-item']}>
                                        <Luggage strokeWidth={1} className={style['card-icon']} />
                                        <p>Місце для багажу</p>
                                    </div>
                                    <div className="">
                                        <span className={style['users-count']}>{car.bags}</span>
                                    </div>
                                </div>

                                <Link href={'/order'} className='btn-add'>Замовити</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}