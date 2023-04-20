import React from 'react';
import s from './Skills.module.css';
import styleContainer from './../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'HTML'} description={'some description some description some description some description some description'} />
                    <Skill title={'CSS 5'} description={'some description'} />
                    <Skill title={'JS'} description={'some description'} />
                    <Skill title={'React'} description={'some description'} />
                    <Skill title={'Redux'} description={'some description'} />
                </div>
            </div>
        </div>
    );
};