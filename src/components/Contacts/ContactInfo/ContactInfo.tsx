import React from "react";
import s from './ContactInfo.module.css';

type PropsType = {
    src: string
    alt: string
    href: string
    description: string
}

export const ContactInfo = ({src, alt, href, description}: PropsType): JSX.Element => {
    return(
        <div className={s.contactWrapper}>
            <img src={src} alt={alt} />
            <a href={href}>{description}</a>
        </div>
    )
}