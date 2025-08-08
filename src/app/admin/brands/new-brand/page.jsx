'use client'
import { useRouter } from 'next/navigation';
import style from './style.module.css';
import { toast } from 'react-toastify';
import Link from 'next/link';

export default function Page() {

    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const title = formData.get('title')

        if(!title) {
            return toast.error('Нічого не додано!')
        }

        const res = await fetch('/api/brands', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({title})
        })

        if (res.ok) {
            toast.success('Новий бренд додан!')
            router.push('/admin/brands')
        } else {
            toast.error('Ошибка додавання!')
        }
    }

    return (
        <div>
            <Link href={'/admin/brands'} className='all-link'>До списку брендів</Link>
            <form onSubmit={handleSubmit}>

                <div className={style['add-wrapper']}>
                    <p>Назва бренду</p>
                    <input type="text" className={style['add-field']} placeholder='назва' name='title' />
                </div>

                <button type="submit" className='btn-add'>Додати</button>
            </form>
        </div>
    );
}