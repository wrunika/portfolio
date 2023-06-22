import React from 'react';
import s from './Main.module.scss';
import myPhoto from './../../assets/images/my-photo.jpg';
import {TypedComponent} from "./TypedComponent/TypedComponent";

export const Main = () => {
   /* const photoStyle = {
        backgroundImage: `url(${myPhoto})`
    }*/
    return (
        <div className={s.mainBlock}>
            <div className={`${s.container} ${s.mainContainer}`}>
                <div className={s.mainText}>
                    <span>Hi there, My name is</span>
                    <h1>Veranika Vitukevich</h1>
                    <TypedComponent />
                </div>
                <div className={s.mainPhoto}><img src={myPhoto} alt={'this is Me'}/></div>
                {/*<div style={photoStyle} className={s.mainPhoto}></div>*/}
            </div>
        </div>
    );
};
