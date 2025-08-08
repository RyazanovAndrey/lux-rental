'use client'
import React, { useState } from 'react';
import style from './style.module.css';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const LoginForm = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const email = formData.get('email')
        const password = formData.get('password')

        if(!email || !password) {
            return toast.error('Поля не можуть бути порожніми!')
        }

        const res = await signIn('credentials', { redirect: false, email, password })

        if(res?.error) {
            toast.error('Такого користувача не існує!')
        }else {
            setErrorMessage('')
            router.push('/admin/cars')
        }
    }

    return (
        <form action="" className={style['login-form']} onSubmit={handleSubmit}>
            <h3 className={style['login-title']}>Вхід</h3>

            <p className={style['login-label']}>Email</p>
            <input type="email" name='email' placeholder='email' className={style['login-item']} />

            <p className={style['login-label']}>Password</p>
            <input type="password" name='password' placeholder='password' className={style['login-item']} />

            <button className={style.btn} type='submit'>Вхід</button>
            {errorMessage && <p className={style.error}>{errorMessage}</p>}
        </form>
    );
}

export default LoginForm;
