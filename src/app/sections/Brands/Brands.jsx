'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Image from 'next/image';

export default () => {

    const brandsList = [
        { image: '/brands/audi.png' },
        { image: '/brands/bmw.png' },
        { image: '/brands/ferrari.png' },
        { image: '/brands/rolls-roys.png' },
        { image: '/brands/volkswagen.png' },
        { image: '/brands/audi.png' },
        { image: '/brands/bmw.png' },
        { image: '/brands/ferrari.png' },
        { image: '/brands/rolls-roys.png' },
        { image: '/brands/volkswagen.png' },
        { image: '/brands/volkswagen.png' },
        { image: '/brands/volkswagen.png' }
    ]

  return (
    <Swiper
      modules={[]}
      spaceBetween={20}
      slidesPerView={6}
      grabCursor={true}
      loop
    >
        {brandsList.map(item => (
            <SwiperSlide>
                <Image src={item.image} width={160} height={160} alt='' />
            </SwiperSlide>
        ))}
    </Swiper>
  );
};
