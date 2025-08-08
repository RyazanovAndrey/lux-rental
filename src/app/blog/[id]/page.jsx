import Image from 'next/image';
import style from './style.module.css';

export default async function Page({ params }) {

    const { id } = await params
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`)
    const blogSingle = await res.json()

    const data = new Date(blogSingle.date)
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return (
        <section className={style.blog}>
            <div className="container">
                <div className={style['blog-wrapper']}>
                    <Image src={blogSingle.image} width={400} height={200} className={style['blog-image']} />
                    <div className={style['blog-info']}>
                        <p className={style['blog-title']}>{blogSingle.title}</p>
                        <p>{data.toLocaleDateString('uk-Ua', options)}</p>
                    </div>
                </div>
                <p className={style['blog-content']}>{blogSingle.content}</p>
            </div>
        </section>
    );
}