'use client'
import React from 'react';
import style from './style.module.css';
import Image from 'next/image';
import { Pencil, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const CarItem = ({ _id, image, title, desc, category, price}) => {

    const router = useRouter()

    const deleteCar = async (id) => {
        const res = await fetch(`/api/cars/${id}`, {
            method: 'DELETE'
        })

        if(res.ok) {
            toast.success('Машина видалена')
            router.refresh()
        }
    }

    return (
        <div className={style['table-content']}>
            <div className={style['table-col']}><Image src={image} width={50} height={50} /></div>
            <div className={style['table-col']}>{title.length > 20 ? title.slice(0, 20) + '...' : title}</div>
            <div className={style['table-col']}>{desc.length > 15 ? desc.slice(0, 15) + '...' : desc}</div>
            <div className={style['table-col']}>{category}</div>
            <div className={style['table-col']}>{price}</div>
            <div className={style['table-col']}>
                <div className={style['btn-group']}>
                    <button className="btn-edit"><Pencil /></button>
                    <button onClick={() => deleteCar(_id)} className="btn-delete"><Trash /></button>
                </div>
            </div>
        </div>
    );
}

export default CarItem;
