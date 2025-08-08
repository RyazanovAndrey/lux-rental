import Link from "next/link";
import BlogItem from '../../components/Admin/BlogItem/BlogItem'
import style from './style.module.css'

export default async function Page() {

    const res = await fetch('http://localhost:3000/api/blogs', { cache: 'no-store' })
    const blogs = await res.json()

    return (
        <div>
            <Link href="/admin/blogs/new-blog" className='btn-add'>Додати</Link>
            <div className={style.table}>
                <div className={style['table-title']}>
                    <div className={style['table-col']}>Фото</div>
                    <div className={style['table-col']}>Заголовок</div>
                    <div className={style['table-col']}>Зміст</div>
                    <div className={style['table-col']}>Дата</div>
                    <div className={style['table-col']}>Управління</div>
                </div>
                {blogs.map(item => (
                    <BlogItem {...item} />
                ))}
            </div>
        </div>
    );
}