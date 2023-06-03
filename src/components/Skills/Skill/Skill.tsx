import React from 'react';
import s from './Skill.module.scss'

type PropsType = {
    title: string
    description?: string
}
export const Skill: React.FC<PropsType> = ({title, description}) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h4 className={s.title}>{title}</h4>
        </div>
    );
};