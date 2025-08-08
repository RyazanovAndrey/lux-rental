import RentCar from "./components/RentCar/RentCar";
import Swiper from "./components/Swiper/Swiper";
import About from "./sections/About/About";
import SelectCar from './sections/SelectCar/SelectCar';
import CarsSwipper from './sections/CarsSwiper/CarsSwiper';
import CategorySwiper from './sections/CategorySwiper/CategorySwiper'
import Services from './sections/Services/Services'
import Blog from './sections/Blog/Blog'
import Brands from './sections/Brands/Brands'
import Contacts from './sections/Contacts/Contacts'

export default function Page() {
  return (
    <>
      <Swiper />
      <RentCar />
      <About />
      <SelectCar />
      <section className="cars-swipper">
        <div className="container">
          <p className="title-desc">вибрати автомобіль</p>
          <h2 className='title-section'>Наш розкішний <span>автопарк</span></h2>
          <CarsSwipper />
        </div>
      </section>
      <section className="category-swiper">
        <div className="container">
          <p className="title-desc">вибрати категорію</p>
          <h2 className='title-section'>Популярні <span>категорії</span></h2>
          <CategorySwiper />
        </div>
      </section>
      <Services />
      <Blog />
      <section className="brand-swipper">
        <div className="container">
          <Brands />
        </div>
      </section>
      <Contacts />
    </>
  );
}