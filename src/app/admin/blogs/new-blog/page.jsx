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
        const { title, content } = Object.fromEntries(formData)

        if (!title || !image.name || !content) {
            return toast.error('Нічого не вибрано')
        }

        formData.append('title', title)
        formData.append('content', content)
        formData.append('image', image)

        const res = await fetch('/api/blogs', {
            method: 'POST',
            body: formData
        })

        if (res.ok) {
            toast.success('Новий пост додан!',)
            router.push('/admin/blogs')
        } else {
            toast.error('Ошибка додавання!')
        }
    }

    return (
        <div>
            <Link href={'/admin/blogs'} className='all-link'>До списку постів</Link>
            <form onSubmit={handleSubmit}>

                <div className={style['add-wrapper']}>
                    <p>Вибрати файл</p>
                    <input type="file" onChange={e => setImage(e.target.files[0])} className={style['add-image']} placeholder='назва' />
                </div>

                <div className={style['add-wrapper']}>
                    <p>Заголовок посту</p>
                    <input type="text" className={style['add-field']} placeholder='назва' name='title' />
                </div>

                <div className={style['add-wrapper']}>
                    <p>Зміст посту</p>
                    <textarea className={style['add-field-textaria']} rows={20} name='content' ></textarea>
                </div>

                <button type="submit" className='btn-add'>Додати</button>
            </form>
        </div>
    );
}