'use client'
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarItem from '../../components/Car/CarItem';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';

export default () => {

    const [carsList, setCarsList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getCars = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/cars', { cache: 'no-store' })
            const cars = await res.json()
            setCarsList(cars)
        } catch (error) {
            console.log('Error data...')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getCars()
    }, [])

    return (
        <Swiper
            modules={[Scrollbar]}
            spaceBetween={20}
            slidesPerView={3}
            grabCursor={true}
            loop
        >
            {isLoading ? 'Завантаження...' : (
                <>
                    {carsList.slice(0, 4).map(item => (
                        <SwiperSlide>
                            <CarItem {...item} />
                        </SwiperSlide>
                    ))}
                </>
            )}
        </Swiper>
    );
};
