import React from 'react';
import style from './syle.module.css';
import TeamsCard from '../../components/TeamsCard/TeamsCard'

const Teams = () => {

    const teamsList = [
        { title: "Марія Бурмістрова", job: "менеджер", image: "/teams/face-1.jpg" },
        { title: "Марія Бурмістрова", job: "менеджер", image: "/teams/face-2.jpg" },
        { title: "Марія Бурмістрова", job: "менеджер", image: "/teams/face-3.jpg" },
        { title: "Марія Бурмістрова", job: "менеджер", image: "/teams/face-1.jpg" },
        { title: "Марія Бурмістрова", job: "менеджер", image: "/teams/face-2.jpg" },
        { title: "Марія Бурмістрова", job: "менеджер", image: "/teams/face-3.jpg" }
    ]

    return (
        <section className={style.teams}>
            <div className="container">
                <h2 className='title-section'>Наша експертна <span>команда</span></h2>
                <div className={style['teams-wrapper']}>
                    {teamsList.map(item => (
                        <TeamsCard {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Teams;
