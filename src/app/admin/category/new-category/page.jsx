'use client'
import { useRouter } from 'next/navigation';
import style from './style.module.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';

export default function Page() {

    const [image, setImage] = useState(false);
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const { title } = Object.fromEntries(formData)

        console.log(image)

        if(!title || !image.name) {
            return toast.error('Нічого не додано!')
        }

        formData.append('title', title)
        formData.append('image', image)

        const res = await fetch('/api/category', {
            method: 'POST',
            body: formData
        })

        if (res.ok) {
            toast.success('Нова категорія додана!')
            router.push('/admin/category')
        } else {
            toast.error('Ошибка додавання!')
        }
    }

    return (
        <div>
            <Link href={'/admin/category'} className='all-link'>До списку категорій</Link>
            <form onSubmit={handleSubmit}>

                <div className={style['add-wrapper']}>
                    <p>Вибрати файл</p>
                    <input type="file" onChange={e => setImage(e.target.files[0])} className={style['add-image']} placeholder='назва' />
                </div>

                <div className={style['add-wrapper']}>
                    <p>Назва категорії</p>
                    <input type="text" className={style['add-field']} placeholder='назва' name='title' />
                </div>

                <button type="submit" className='btn-add'>Додати</button>
            </form>
        </div>
    );
}