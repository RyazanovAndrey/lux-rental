import style from './style.module.css';
import BlogCard from '../../components/BlogCard/BlogCard';

const Blog = async () => {

    const res = await fetch('http://localhost:3000/api/blogs', { cache: 'no-store' })
    const postBlog = await res.json()

    return (
        <section className={style.blog}>
            <div className="container">
                <p className="title-desc">наш блог</p>
                <h2 className='title-section'>Останні <span>новини</span></h2>
                <div className={style['blog-wrapper']}>
                    {postBlog.slice(0, 3).map(item => (
                        <BlogCard {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blog;
