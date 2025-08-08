'use client'
import React, { useEffect, useState } from 'react';
import { Cute_Font } from "next/font/google";
import style from './style.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

const cuteFont = Cute_Font({
    subsets: ["latin"],
    weight: ['400']
});

const Header = () => {

    const path = usePathname()
    const [isScroll, setIsScroll] = useState(false);

    const session = useSession()
    console.log(session)

    useEffect(() => {
        const bgColor = () => setIsScroll(window.scrollY > 100)
        window.addEventListener('scroll', bgColor)

        return () => {
            window.removeEventListener('scroll', bgColor)
        }

    }, [])

    const links = [
        { href: '/about', title: 'О нас' },
        { href: '/services', title: 'Сервіси' },
        { href: '/cars', title: 'Машини' },
        { href: '/blog', title: 'Блог' },
        { href: '/contacts', title: 'Контакти' },
    ]

    return (
        <header className={`${style.header} ${isScroll ? style.active : ''}`}>
            <div className="container">
                <div className={style.wrapper}>
                    <Link href={'/'} className={`${cuteFont.className} ${style.logo}`}>Lux<span>Rental</span></Link>
                    <div className={style.menu}>
                        {links.map(item => {
                            const activeLink = path == item.href || path.startsWith(item.href) && item.href !== '/'
                            return <Link href={item.href} className={activeLink ? 'link active' : 'link'}>{item.title}</Link>
                        })}

                    </div>
                    <div className={style['call-block']}>
                        <Image src={'/icons/call.svg'} width={40} height={40} alt='' />
                        <div className="">
                            <p>допомога</p>
                            <strong>8 800 500 20 50</strong>
                        </div>
                    </div>
                    {session.data?.user ? (
                        <>
                            <Link href={'/admin/cars'}>Админ панель</Link>
                            <button onClick={() => signOut({ callbackUrl: '/login' })} className={style['btn-login']}>Вихід</button>
                        </>
                    ) : (
                        <>
                            <Link href={'/login'} className={style['btn-login']}>Вхід</Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
