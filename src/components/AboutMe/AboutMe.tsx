import React from 'react';
import s from './AboutMe.module.scss';
import aboutPhoto from '../../assets/images/IMG_1534_cut-photo.ru.jpg';
import {Title} from '../../common/components/Title/Title';
import {Slide} from "react-awesome-reveal";

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
        <div id={'aboutMe'} className={s.aboutBlock}>
            {/*<AttentionSeeker effect={'pulse'} triggerOnce={true}>*/}
                <Title title={'About Me'}/>
                <div className={`${s.container} ${s.aboutContainer}`}>
                    <Slide direction={'left'}>
                        <div className={s.aboutPhoto}>
                            <img src={aboutPhoto} alt='this is me'/>
                        </div>
                    </Slide>
                    <Slide direction={'right'} className={s.abouteInfoSlide}>
                        <div className={s.aboutInfo}>
                            <p>I'm a Front-end Developer. I'm from Minsk. I would like to code and create web elements for
                                amazing people around the world. I like work with new people. New people, new
                                Experiences.</p>
                            <div className={s.personalInfo}>
                                <div>
                                    {firstInfoDiv.map((item, index) => {
                                        return <p key={index}><span
                                            className={item.className}>{item.title}</span>{item.info}</p>
                                    })}
                                </div>
                                <div>
                                    {secondInfoDiv.map((item, index) => {
                                        return <p key={index}><span
                                            className={item.className}>{item.title}</span>{item.info}</p>
                                    })}
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            {/*</AttentionSeeker>*/}
        </div>
    );
};

type InfoBlockType = {
    className: string
    title: string
    info: string
}