'use client'

import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import Car from '../../components/Car/CarItem'
import { Search } from 'lucide-react';

const CarsList = () => {

    const [sortTab, setSortTab] = useState('Всі');
    const [carsList, setCarsList] = useState(null);
    const [brandList, setBrandList] = useState(null);

    console.log(brandList)

    useEffect(() => {
        const getCars = async () => {
            const res = await fetch('http://localhost:3000/api/cars', { cache: 'no-store' })
            const data = await res.json()
            setCarsList(data)
        }
        getCars()
    }, [sortTab])

    useEffect(() => {
        const getBrands = async () => {
            const res = await fetch('http://localhost:3000/api/brands', { cache: 'no-store' })
            const data = await res.json()
            setBrandList(data)
        }
        getBrands()
    }, [])

    return (
        <div className={style['cars-wrapper']}>
            <div className={style['side-bar']}>
                <div className={style['search-wrapper']}>
                    <input type="text" className={style['search-car']} placeholder='шукати...' />
                    <Search className={style.search} />
                </div>
                <p className={style['cars-brand']}>Бренд</p>
                <div className={style['cars-brand-wrapper']}>
                    <p onClick={() => setSortTab('Всі')} className={sortTab == 'Всі' ? 'cars-brand-item active' : 'cars-brand-item'}>Всі</p>
                    {brandList && brandList.map(item => (
                        <p onClick={() => setSortTab(item.title)} className={sortTab == item.title ? 'cars-brand-item active' : 'cars-brand-item'}>{item.title}</p>
                    ))}
                </div>
            </div>
            <div className={style['cars-list']}>
                {carsList && carsList.filter(item => sortTab == 'Всі' ? item : item.brand == sortTab).map(item => (
                    <Car {...item} />
                ))}
            </div>
        </div>
    );
}

export default CarsList;
