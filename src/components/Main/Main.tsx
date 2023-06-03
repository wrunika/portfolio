import React from 'react';
import s from './Main.module.scss';
import styleContainer from '../../common/styles/Container.module.scss';
import myPhoto from './../../assets/images/my-photo.jpg';
import {TypedComponent} from "./TypedComponent/TypedComponent";

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <div className={s.mainText}>
                    <span>Hi there, My name is</span>
                    <h1>Veranika Vitukevich</h1>
                    <TypedComponent />
                </div>
                <div className={s.mainPhoto}><img src={myPhoto} alt={'this is Me'}/></div>
            </div>
        </div>
    );
};
