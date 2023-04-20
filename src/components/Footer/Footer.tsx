import React from 'react';
import s from './Footer.module.css';
import styleContainer from './../../common/styles/Container.module.css';

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Veranika Vitukevich</h2>
                <div className={s.socialIcons}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                <div>2023 All rights reserved</div>
            </div>
        </div>
    );
};