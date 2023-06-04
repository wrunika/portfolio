import React from 'react';
import s from './Skill.module.scss'

type PropsType = {
    title: string
    icon?: React.ReactNode
}
export const Skill: React.FC<PropsType> = ({title, icon}) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>{icon}</div>
            <h4 className={s.title}>{title}</h4>
        </div>
    );
};