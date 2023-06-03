import React from 'react';
import s from './Project.module.scss'


type PropsType = {
    title: string
    description: string
    style?: {backgroundImage: string}
}
export const Project = ({title, description, style}: PropsType): JSX.Element => {
    return (
        <div className={s.project}>
            <div className={s.iconContainer} style={style}>
                {/*<a href="">Watch</a>*/}
            </div>
            <h3 className={s.title}>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};