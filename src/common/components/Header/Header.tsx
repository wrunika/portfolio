import React from 'react';
import s from './Header.module.css';
import {Nav} from "../../../components/Nav/Nav";

export const Header = () => {
    return (
        <div className={s.header}>
            <Nav />
        </div>
    );
};
