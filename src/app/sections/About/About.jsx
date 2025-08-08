import React from 'react';
import style from './style.module.css';
import { CircleCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../components/Button/Button';

const About = () => {
    return (
        <section className={style.about}>
            <div className="container">
                <div className={style['about-wrapper']}>
                    <div className={style['about-content']}>
                        <h2 className={style['about-title']}>Ми більше, ніж просто <span>компанія з оренди машин</span></h2>
                        <p className={style['about-text']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maiores laboriosam distinctio possimus quisquam dolores molestiae quia est dolorem debitis voluptate alias libero facilis perspiciatis provident accusantium, officiis porro excepturi cum necessitatibus corrupti adipisci minima facere sint! Ut, adipisci exercitationem eos sunt quos, delectus dolorum ipsa neque molestias, aspernatur porro.</p>
                        <div className={style['about-check']}>
                            <CircleCheck className={style['about-icon']} />
                            <p>Спортивні та люксові машини</p>
                        </div>
                        <div className={style['about-check']}>
                            <CircleCheck className={style['about-icon']} />
                            <p>Машини економ класу</p>
                        </div>
                        <Button path="/cars" className='btn-more'>Дивитися більше</Button>
                    </div>
                    <div className="">
                        <Image src={'/about.jpg'} className={style['about-image']} width={440} height={440} alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
