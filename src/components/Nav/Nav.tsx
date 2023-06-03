import React from 'react';
import s from './Nav.module.scss';
import skillsImage from './../../assets/images/list.svg';
import projectsImage from './../../assets/images/computer.svg';
import contactsImage from './../../assets/images/envelope.svg';
import aboutImage from './../../assets/images/woman.svg';

export const Nav = () => {
    return (
        <>
            <div className={s.navGeneral}>
                <a className={s.main} href="">V</a>
                <div className={s.nav}>
                    <a href=""><img src={aboutImage} alt={""}/><span className={s.imgDescription + " " + s.about}>About</span></a>
                    <a href=""><img src={skillsImage} alt={""}/><span className={s.imgDescription  + " " + s.skills}>Skills</span></a>
                    <a href=""><img src={projectsImage} alt={""}/><span className={s.imgDescription  + " " + s.projects}>Projects</span></a>
                    <a href=""><img src={contactsImage} alt={""}/><span className={s.imgDescription + " " + s.contacts}>Contacts</span></a>
                </div>
            </div>
            <div className={s.burgerMenu}>
                <span className={s.burger}></span>
            </div>
        </>
    );
};