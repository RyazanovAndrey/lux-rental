'use client'
import Link from 'next/link';
import React from 'react';
import style from './style.module.css';
import { usePathname } from 'next/navigation';

const SideBar = () => {

    const path = usePathname()

    const sideBarLink = [
        { href: '/admin/cars', title: 'Машини' },
        { href: '/admin/category', title: 'Категорії' },
        { href: '/admin/brands', title: 'Бренди' },
        { href: '/admin/blogs', title: 'Пости блога' },
    ]

    return (
        <div className={style.sidebar}>
            {sideBarLink.map(item => {
                const activeLink = path == item.href || path.startsWith(item.href) && item.href !== '/'
                const activeNav = `${style['sidebar-link']} ${style.active}`
                return <Link href={item.href} className={activeLink ? activeNav : style['sidebar-link']}>{item.title}</Link>
            })}
        </div>
    );
}

export default SideBar;
