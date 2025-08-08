import Link from "next/link";
import style from './style.module.css';
import BrandItem from '../../components/Admin/BrandItem/BrandItem'

export default async function Page() {

    const res = await fetch('http://localhost:3000/api/brands', { cache: 'no-store' })
    const category = await res.json()

    return (
        <div>
            <Link href="/admin/brands/new-brand" className='btn-add'>Додати</Link>
            <div className={style.table}>
                <div className={style['table-title']}>
                    <div className={style['table-col']}>Найменування</div>
                    <div className={style['table-col']}>Управління</div>
                </div>
                {category.map(item => (
                    <BrandItem {...item} />
                ))}
            </div>
        </div>
    );
}