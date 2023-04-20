import React from 'react';
import s from './Project.module.css'


type PropsType = {
    title: string
    description: string
}
export const Project: React.FC<PropsType> = ({title, description}) => {
    return (
        <div className={s.project}>
            <div className={s.iconContainer}>
                <a href="">Watch</a>
            </div>
            <h3 className={s.title}>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};