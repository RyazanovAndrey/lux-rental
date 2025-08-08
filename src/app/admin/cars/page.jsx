import Link from "next/link";
import style from './style.module.css';
import CarItem from '../../components/Admin/CarItem/CarItem';

export default async function Page() {

    const res = await fetch('http://localhost:3000/api/cars', { cache: 'no-store' })
    const cars = await res.json()

    return (
        <div>
            <Link href="/admin/cars/new-car" className='btn-add'>Додати</Link>
            <div className={style.table}>
                <div className={style['table-title']}>
                    <div className={style['table-col']}>Фото</div>
                    <div className={style['table-col']}>Найменування</div>
                    <div className={style['table-col']}>Опис</div>
                    <div className={style['table-col']}>Категорія</div>
                    <div className={style['table-col']}>Ціна</div>
                    <div className={style['table-col']}>Управління</div>
                </div>
                {cars.map(item => (
                    <CarItem {...item} />
                ))}
            </div>
        </div>
    );
}