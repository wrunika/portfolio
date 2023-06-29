import React, {useState} from 'react';
import s from './BurgerNav.module.scss';
import {Link} from 'react-scroll';
import aboutImage from "../../assets/images/woman.svg";
import skillsImage from "../../assets/images/list.svg";
import projectsImage from "../../assets/images/computer.svg";
import contactsImage from "../../assets/images/envelope.svg";

export const BurgerNav = () => {
    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);
    const [buttonX, setButtonX] = useState(false)

    const onBurgerBtnClick = () => {
      setBurgerMenuIsOpen(!burgerMenuIsOpen);
      setButtonX(!burgerMenuIsOpen);
    }

    const onLinkClick = () => {
      setBurgerMenuIsOpen(false);
      setButtonX(false)
        console.log(burgerMenuIsOpen, 'about burger')
        console.log(buttonX, 'about x')
    }

    const openClass = burgerMenuIsOpen ? s.open : '';
    const btnXClass = buttonX ? s.btnX : '';

    return (
        <div className={s.burgerMenu}>
            <Link to={'/'} className={s.main} spy={true} duration={500} smooth={true} onClick={onLinkClick}>V</Link>
            <span className={s.burger + ' ' + btnXClass} onClick={onBurgerBtnClick}></span>
            <div className={s.burgerItems + ' ' + openClass}>
                <Link to={'aboutMe'} offset={-50} activeClass={s.active} spy={true} duration={500} smooth={true} onClick={onLinkClick}>
                    <img src={aboutImage} alt={""}/>
                </Link>
                <Link to={'skills'} offset={-50} activeClass={s.active} spy={true} duration={500} smooth={true} onClick={onLinkClick}>
                    <img src={skillsImage} alt={""}/>
                </Link>
                <Link to={'projects'} offset={-50} activeClass={s.active} spy={true} duration={500} smooth={true} onClick={onLinkClick}>
                    <img src={projectsImage} alt={""}/>
                </Link>
                <Link to={'contacts'} offset={-150} activeClass={s.active} spy={true} duration={500} smooth={true} onClick={onLinkClick}>
                    <img src={contactsImage} alt={""}/>
                </Link>
            </div>
        </div>
    );
};