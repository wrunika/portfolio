import React from 'react';
import s from './Skill.module.css'

type PropsType = {
    title: string
    description: string
}
export const Skill: React.FC<PropsType> = ({title, description}) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3 className={s.title}>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};