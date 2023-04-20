import React from 'react';
import s from './Main.module.css';
import styleContainer from './../../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <div className={s.mainText}>
                    <span>Hi there</span>
                    <h1>I am Veranika Vitukevich</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={s.mainPhoto}></div>
            </div>
        </div>
    );
};
