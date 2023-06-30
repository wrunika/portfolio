import React from 'react';
import s from './Title.module.scss';
import {AttentionSeeker} from "react-awesome-reveal";

type PropsType = {
    title: string
}

export const Title: React.FC<PropsType> = ({title}) => {
    return (
        <AttentionSeeker effect={'pulse'}>
            <h2 className={s.title}>{title}</h2>
        </AttentionSeeker>
    );
};