import React from 'react';
import s from './Skills.module.css';
import styleContainer from './../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/components/Title/Title";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={'Skills'} />
                <div className={s.skills}>
                    {/*<Skill title={'HTML'} description={'some description some description some description some description some description'} />
                    <Skill title={'CSS 5'} description={'some description'} />
                    <Skill title={'JS'} description={'some description'} />
                    <Skill title={'React'} description={'some description'} />
                    <Skill title={'Redux'} description={'some description'} />*/}
                    <Skill title={'HTML'} />
                    <Skill title={'CSS 5'} />
                    <Skill title={'JS'} />
                    <Skill title={'TypeScript'} />
                    <Skill title={'Git'} />
                    <Skill title={'React'} />
                    <Skill title={'Redux'} />
                    <Skill title={'REST API'} />
                    <Skill title={'Axios'} />
                    <Skill title={'Formik'} />
                    <Skill title={'Unit Tests'} />
                    <Skill title={'Postman'} />
                </div>
            </div>
        </div>
    );
};