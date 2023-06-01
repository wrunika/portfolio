import React from 'react';
import s from './AboutMe.module.css';
import styleContainer from "../../common/styles/Container.module.css";
import aboutPhoto from '../../assets/images/IMG_1534_cut-photo.ru.jpg';
import {Title} from "../../common/components/Title/Title";

export const AboutMe = () => {
    return (
        <div className={s.aboutBlock}>
            <Title title={'About Me'} />
            <div className={`${styleContainer.container} ${s.aboutContainer}`}>
                <div className={s.aboutPhoto}>
                    <img src={aboutPhoto} alt="it's me"/>
                </div>
                <div className={s.aboutInfo}>
                    <p>I'm a Front-end Developer. I'm from Minsk. I would like to code and create web elements for amazing people around the world. I like work with new people. New people, new Experiences.</p>
                    <div className={s.personalInfo}>
                        <div>
                            <p><span className={s.infoTitle}>Name:</span> Veranika Vitukevich</p>
                            <p><span className={s.infoTitle}>Birthday:</span> 28th May 1987</p>
                            <p><span className={s.infoTitle}>Languages:</span></p>
                            <p><span className={s.language}>Belarusian, Russian</span> - Native</p>
                            <p><span className={s.language}>English</span> - B1</p>
                            <p><span className={s.language}>Polish</span> - B1</p>
                        </div>
                        <div>
                            <p><span className={s.infoTitle}>Address:</span> Minsk, Belarus</p>
                            <p><span className={s.infoTitle}>Phone:</span> (+375) 29 789 72 45</p>
                            <p><span className={s.infoTitle}>Email:</span> 2805nika@gmail.com</p>
                            <p><span className={s.infoTitle}>Study:</span> IT-Incubator</p>
                            <p><span className={s.infoTitle}>Remote work:</span> Available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};