'use client'
import { useRouter } from 'next/navigation';
import style from './style.module.css';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';

export default function Page() {

    const [image, setImage] = useState(false);
    const [categoryList, setCategoryList] = useState([]);
    const [brandList, setBrandList] = useState([]);
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const { title, people, doors, trans, bags, brand, desc, price, category } = Object.fromEntries(formData)

        if (!title || !image.name) {
            return toast.error('Нічого не вибрано')
        }

        formData.append('title', title)
        formData.append('people', people)
        formData.append('doors', doors)
        formData.append('trans', trans)
        formData.append('bags', bags)
        formData.append('brand', brand)
        formData.append('desc', desc)
        formData.append('price', price)
        formData.append('category', category)
        formData.append('image', image)

        const res = await fetch('/api/cars', {
            method: 'POST',
            body: formData
        })

        if (res.ok) {
            toast.success('Нова машина додана!')
            router.push('/admin/cars')
        } else {
            toast.error('Ошибка додавання!')
        }
    }

    useEffect(() => {
        const getCategory = async () => {
            const res = await fetch('/api/category')
            const data = await res.json()
            setCategoryList(data)
        }
        getCategory()
    }, [])

    useEffect(() => {
        const getBrand = async () => {
            const res = await fetch('/api/brands')
            const data = await res.json()
            setBrandList(data)
        }
        getBrand()
    }, [])

    return (
        <div>
            <Link href={'/admin/cars'} className='all-link'>До списку машин</Link>
            <form onSubmit={handleSubmit}>

                <div className={style['add-wrapper']}>
                    <p>Вибрати файл</p>
                    <input type="file" onChange={e => setImage(e.target.files[0])} className={style['add-image']} placeholder='назва' />
                </div>

                <div className={style['add-wrapper']}>
                    <p>Назва машини</p>
                    <input type="text" className={style['add-field']} placeholder='назва' name='title' />
                </div>

                <div className={style['add-wrapper']}>
                    <p>Опис</p>
                    <textarea className={style['add-field-textaria']} rows={20} name='desc' ></textarea>
                </div>

                <div className={style['add-options-first']}>
                    <div className={style['add-wrapper']}>
                        <p>Ціна / день</p>
                        <input type="text" className={style['add-field']} placeholder='ціна' name='price' />
                    </div>
                    <div className={style['add-wrapper']}>
                        <p>Бренд</p>
                        <select className={style['add-field-select']} name='brand'>
                            {brandList.map(item => (
                                <option value={item.title}>{item.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className={style['add-wrapper']}>
                        <p>Категорія</p>
                        <select className={style['add-field-select']} name='category'>
                            {categoryList.map(item => (
                                <option value={item.title}>{item.title}</option>
                            ))}
                        </select>
                    </div>
                </div>


                <div className={style['add-wrapper']}>
                    <p>Додаткові опції</p>
                    <div className={style['add-options']}>
                        <input type="number" className={style['add-field']} placeholder='кільк. пасажирів' name='people' />
                        <input type="number" className={style['add-field']} placeholder='кільк. дверей' name='doors' />
                        <input type="text" className={style['add-field']} placeholder='коробка передач' name='trans' />
                        <input type="number" className={style['add-field']} placeholder='bags' name='bags' />
                    </div>
                </div>

                <button type="submit" className='btn-add'>Додати</button>
            </form>
        </div>
    );
}