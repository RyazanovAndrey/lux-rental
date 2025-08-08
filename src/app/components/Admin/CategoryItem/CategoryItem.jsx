'use client'
import React from 'react';
import style from './style.module.css';
import Image from 'next/image';
import { Pencil, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const CategoryItem = ({ _id, image, title }) => {

    const router = useRouter()

    const deleteCategory = async (id) => {
        const res = await fetch(`/api/category/${id}`, {
            method: 'DELETE'
        })

        if(res.ok) {
            toast.success('Категорія видалена!')
            router.refresh()
        } else {
            toast.error('Помилка видалення!')
        }
    }

    return (
        <div className={style['table-content']}>
            <div className={style['table-col']}><Image src={image} width={50} height={50} /></div>
            <div className={style['table-col']}>{title}</div>
            <div className={style['table-col']}>
                <div className={style['btn-group']}>
                    <button className="btn-edit"><Pencil /></button>
                    <button onClick={() => deleteCategory(_id)} className="btn-delete"><Trash /></button>
                </div>
            </div>
        </div>
    );
}

export default CategoryItem;
