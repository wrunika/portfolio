import React from 'react';
import s from './Header.module.scss';
import {Nav} from '../../../components/Nav/Nav';
import {BurgerNav} from '../../../components/BurgerNav/BurgerNav';

export const Header = () => {
    return (
        <div className={s.header}>
            <Nav />
            <BurgerNav />
        </div>
    );
};
