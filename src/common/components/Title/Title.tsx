import React from 'react';
import s from './Title.module.scss';

type PropsType = {
    title: string
}

export const Title: React.FC<PropsType> = ({title}) => {
    return (
        <>
            <h2 className={s.title}>{title}</h2>
        </>
    );
};