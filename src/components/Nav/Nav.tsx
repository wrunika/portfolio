import React from 'react';
import s from './Nav.module.scss';
import skillsImage from './../../assets/images/list.svg';
import projectsImage from './../../assets/images/computer.svg';
import contactsImage from './../../assets/images/envelope.svg';
import aboutImage from './../../assets/images/woman.svg';
import {Link} from 'react-scroll';

export const Nav = () => {
    return (
        <>
            <div className={s.navGeneral}>
                <Link to={'/'} className={s.main} spy={true} duration={500} smooth={true}>V</Link>
                <div className={s.nav}>
                    <Link to={'aboutMe'} offset={-50} activeClass={s.active} spy={true} duration={500} smooth={true}>
                        <img src={aboutImage} alt={""}/><span className={s.imgDescription + " " + s.about}>About</span>
                    </Link>
                    <Link to={'skills'} offset={-50} activeClass={s.active} spy={true} duration={500} smooth={true}>
                        <img src={skillsImage} alt={""}/><span className={s.imgDescription  + " " + s.skills}>Skills</span>
                    </Link>
                    <Link to={'projects'} offset={-50} activeClass={s.active} spy={true} duration={500} smooth={true}>
                        <img src={projectsImage} alt={""}/><span className={s.imgDescription  + " " + s.projects}>Projects</span>
                    </Link>
                    <Link to={'contacts'} offset={-50} activeClass={s.active} spy={true} duration={500} smooth={true}>
                        <img src={contactsImage} alt={""}/><span className={s.imgDescription + " " + s.contacts}>Contacts</span>
                    </Link>
                </div>
            </div>
            <div className={s.burgerMenu}>
                <span className={s.burger}></span>
            </div>
        </>
    );
};