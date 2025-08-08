'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import CategoryItem from '../../components/Category/CategoryItem';

import 'swiper/css';
import { useEffect, useState } from 'react';

export default () => {

  const [categoryList, setCategoryList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getCars = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/category', { cache: 'no-store' })
      const cars = await res.json()
      setCategoryList(cars)
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
      modules={[]}
      spaceBetween={20}
      slidesPerView={3}
      grabCursor={true}
      loop
    >
      {isLoading ? 'Завантаження...' : (
                <>
                    {categoryList.slice(0, 4).map(item => (
                        <SwiperSlide>
                            <CategoryItem {...item} />
                        </SwiperSlide>
                    ))}
                </>
            )}
    </Swiper>
  );
};
