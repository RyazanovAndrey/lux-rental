import Link from "next/link";
import style from './style.module.css';
import CategoryItem from '../../components/Admin/CategoryItem/CategoryItem'

export default async function Page() {

    const res = await fetch('http://localhost:3000/api/category', { cache: 'no-store' })
    const category = await res.json()

    return (
        <div>
            <Link href="/admin/category/new-category" className='btn-add'>Додати</Link>
            <div className={style.table}>
                <div className={style['table-title']}>
                    <div className={style['table-col']}>Фото</div>
                    <div className={style['table-col']}>Найменування</div>
                    <div className={style['table-col']}>Управління</div>
                </div>
                {category.map(item => (
                    <CategoryItem {...item} />
                ))}
            </div>
        </div>
    );
}