import React from 'react';
import s from './Project.module.scss'


type PropsType = {
    title: string
    style?: {backgroundImage: string}
    link: string
}
export const Project = ({title, style, link}: PropsType): JSX.Element => {
    return (
        <div className={s.project}>
            <div className={s.iconContainer} style={style}>
            </div>
            <h3 className={s.title}>{title}</h3>
            <span className={s.description}><a href={link} className={s.projectLink}>Watch</a></span>
        </div>
    );
};