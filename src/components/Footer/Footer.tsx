import React from 'react';
import s from './Footer.module.scss';
import github from '../../assets/images/github-fill.svg';
import linkedin from '../../assets/images/linkedin-fill.svg';
import telegram from '../../assets/images/telegram-fill.svg';
import discord from '../../assets/images/discord-fill.svg';

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${s.container} ${s.footerContainer}`}>
                <div className={s.socialIcons}>
                    <div className={s.icon}>
                        <a href="https://github.com/wrunika"><img src={github} alt={'github'}/></a>
                    </div>
                    <div className={s.icon}>
                        <a href="https://github.com/wrunika"><img src={linkedin} alt={'linkedin'}/></a>
                    </div>
                    <div className={s.icon}>
                        <a href="https://github.com/wrunika"><img src={telegram} alt={'telegram'}/></a>
                    </div>
                    <div className={s.icon}>
                        <a href="https://github.com/wrunika"><img src={discord} alt={'discord'}/></a>
                    </div>
                </div>
                <div className={s.footerInfo}>Copyright © 2023 <span>V/Vitukevich</span>. All Rights Reserved.</div>
            </div>
        </div>
    );
};