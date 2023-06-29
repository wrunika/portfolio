import React from 'react';
import s from './Contacts.module.scss';
import {Title} from "../../common/components/Title/Title";
import phoneImg from '../../assets/images/vertical-tablet.svg';
import mapImg from '../../assets/images/map.svg';
import emailImg from '../../assets/images/envelope-open.svg';
import {ContactInfo} from "./ContactInfo/ContactInfo";
import {AttentionSeeker} from "react-awesome-reveal";

export const Contacts = () => {
    const contactInfo = [
        {src: mapImg, alt: 'location', href: 'https://www.google.by/maps/place/Minsk', description: 'Minsk, Belarus'},
        {src: emailImg, alt: 'email', href: 'mailto:2805nika@gmail.com', description: '2805nika@gmail.com'},
        {src: phoneImg, alt: 'phone', href: 'tel:+375297897245', description: '+375-29-789-72-45'},
    ]
    return (
        <div id={'contacts'} className={s.contactsBlock}>
            <AttentionSeeker effect={'pulse'} triggerOnce={true}>
                <div className={s.container}>
                    <Title title={'Get in touch'}/>
                    <div className={s.contactsContainer}>
                        <div className={s.contactsInfo}>
                            {contactInfo.map((item, index) => {
                                return (
                                    <ContactInfo
                                        key={index}
                                        src={item.src}
                                        alt={item.alt}
                                        href={item.href}
                                        description={item.description}
                                    />
                                )
                            })}
                        </div>
                        <form action="" className={s.contactsForm}>
                            <input placeholder={"Name*"} type="text"/>
                            <input placeholder={"Email*"} type="text"/>
                            <textarea placeholder={"Your Message*"} rows={8}></textarea>
                            <button type={"submit"} className={s.contactsButton}>Send message</button>
                        </form>
                    </div>
                </div>
            </AttentionSeeker>
        </div>
    );
};