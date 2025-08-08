import style from './style.module.css';
import ServicesList from '../../data.json';
import ServicesCard from '../../components/ServicesCard/ServicesCard';

const Services = () => {

    return (
        <section className={style.services}>
            <div className="container">
                <p className="title-desc">що ми надаємо</p>
                <h2 className='title-section'>Додаткові <span>сервіси</span></h2>
                <div className={style['services-wrapper']}>
                    {ServicesList.services.map(item => (
                        <ServicesCard {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
