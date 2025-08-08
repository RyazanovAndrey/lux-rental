'use client'
import style from './style.module.css';
import Image from 'next/image';
import { Pencil, Trash } from 'lucide-react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const CarItem = ({ _id, image, title, content, date }) => {

    const currentDate = new Date(date)
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }

    const router = useRouter()

    const deleteBlogItem = async (id) => {
        const res = await fetch(`/api/blogs/${id}`, {
            method: 'DELETE'
        })

        if (res.ok) {
            toast.success('Пост видален!')
            router.refresh()
        }
    }

    return (
        <div className={style['table-content']}>
            <div className={style['table-col']}><Image src={image} width={50} height={50} /></div>
            <div className={style['table-col']}>{title.length > 20 ? title.slice(0, 20) + '...' : title}</div>
            <div className={style['table-col']}>{content.length > 15 ? content.slice(0, 15) + '...' : content}</div>
            <div className={style['table-col']}>{currentDate.toLocaleDateString('uk-Ua', options)}</div>
            <div className={style['table-col']}>
                <div className={style['btn-group']}>
                    <button className="btn-edit"><Pencil /></button>
                    <button onClick={() => deleteBlogItem(_id)} className="btn-delete"><Trash /></button>
                </div>
            </div>
        </div>
    );
}

export default CarItem;

