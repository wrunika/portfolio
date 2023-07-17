import React from 'react';
import s from './Skill.module.scss'

type PropsType = {
    title: string
    iconComponent: React.ReactNode | string
}
export const Skill: React.FC<PropsType> = ({title, iconComponent}) => {
    return (
        <div className={s.skill}>
            {typeof iconComponent === 'string' ? <img className={s.icon + ' ' + s.iconImg} src={iconComponent} alt={'icon'} /> : <div className={s.icon}>{iconComponent}</div>}
            <h4 className={s.title}>{title}</h4>
        </div>
    );
};