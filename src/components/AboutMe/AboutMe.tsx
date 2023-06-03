import React from 'react';
import s from './AboutMe.module.scss';
import styleContainer from '../../common/styles/Container.module.scss';
import aboutPhoto from '../../assets/images/IMG_1534_cut-photo.ru.jpg';
import {Title} from '../../common/components/Title/Title';

export const AboutMe = () => {
    const firstInfoDiv: InfoBlockType[] = [
        {className: s.infoTitle, title: 'Name:', info: 'Veranika Vitukevich'},
        {className: s.infoTitle, title: 'Birthday:', info: '28th May 1987'},
        {className: s.infoTitle, title: 'Languages:', info: ''},
        {className: s.language, title: 'Belarusian, Russian', info: ' - Native'},
        {className: s.language, title: 'English', info: ' - B1'},
        {className: s.language, title: 'Polish', info: ' - B1'},
    ];
    const secondInfoDiv: InfoBlockType[] = [
        {className: s.infoTitle, title: 'Address:', info: 'Minsk, Belarus'},
        {className: s.infoTitle, title: 'Phone:', info: '(+375) 29 789 72 45'},
        {className: s.infoTitle, title: 'Email:', info: '2805nika@gmail.com'},
        {className: s.infoTitle, title: 'Study:', info: 'IT-Incubator'},
        {className: s.infoTitle, title: 'Remote work:', info: 'Available'},
    ];
    return (
        <div className={s.aboutBlock}>
            <Title title={'About Me'} />
            <div className={`${styleContainer.container} ${s.aboutContainer}`}>
                <div className={s.aboutPhoto}>
                    <img src={aboutPhoto} alt='this is me'/>
                </div>
                <div className={s.aboutInfo}>
                    <p>I'm a Front-end Developer. I'm from Minsk. I would like to code and create web elements for amazing people around the world. I like work with new people. New people, new Experiences.</p>
                    <div className={s.personalInfo}>
                        <div>
                            {firstInfoDiv.map((item, index) => {
                                return <p key={index}><span className={item.className}>{item.title}</span>{item.info}</p>
                            })}
                        </div>
                        <div>
                            {secondInfoDiv.map((item, index) => {
                                return <p key={index}><span className={item.className}>{item.title}</span>{item.info}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

type InfoBlockType = {
    className: string
    title: string
    info: string
}