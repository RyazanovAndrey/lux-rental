'use client'
import React from 'react';
import style from './style.module.css';
import Image from 'next/image';
import { Pencil, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const BrandItem = ({ _id, title }) => {

    const router = useRouter()

    const deleteBrands = async (id) => {
        const res = await fetch(`/api/brands/${id}`, {
            method: 'DELETE'
        })

        if(res.ok) {
            toast.success('Бренд видален!')
            router.refresh()
        } else {
            toast.error('Помилка видалення!')
        }
    }

    return (
        <div className={style['table-content']}>
            <div className={style['table-col']}>{title}</div>
            <div className={style['table-col']}>
                <div className={style['btn-group']}>
                    <button className="btn-edit"><Pencil /></button>
                    <button onClick={() => deleteBrands(_id)} className="btn-delete"><Trash /></button>
                </div>
            </div>
        </div>
    );
}

export default BrandItem;

