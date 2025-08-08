'use client'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './style.module.css';
import { Cute_Font } from "next/font/google";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import Button from '../Button/Button';

const cuteFont = Cute_Font({
  subsets: ["latin"],
  weight: ['400']
});

export default () => {
    return (
        <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            navigation
            loop
        >
            <SwiperSlide style={{background: 'url("/slider/slider-1.jpg")'}} className={style.slider}>
                <div className="container">
                    <div className={style['slider-wrapper']}>
                        <p>Premium Cars</p>
                        <div className={`${cuteFont.className} ${style.title}`}>LuxRental</div>
                        <p>Ви можете орендувати будь-яку машину, що вам сподобалася.</p>
                        <div className={style['btn-group']}>
                            <Button path="/cars" className='btn-more'>Дивитися більше</Button>
                            <Link href={'/order'} className={style['btn-order']}>Замовити зараз</Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide style={{background: 'url("/slider/slider-2.jpg")'}} className={style.slider}>
                <div className="container">
                    <div className={style['slider-wrapper']}>
                        <p>Premium Cars</p>
                        <div className={`${cuteFont.className} ${style.title}`}>LuxRental</div>
                        <p>Ви можете орендувати будь-яку машину, що вам сподобалася.</p>
                        <div className={style['btn-group']}>
                            <Button path="/cars" className='btn-more'>Дивитися більше</Button>
                            <Link href={'/order'} className={style['btn-order']}>Замовити зараз</Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};
