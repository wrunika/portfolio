import React from 'react';
import s from './ContactsForm.module.scss';

const ContactsForm = () => {
    return (
        <>
            <form action="" className={s.contactsForm}>
                <input placeholder={"Name*"} type="text"/>
                <input placeholder={"Email*"} type="text"/>
                <textarea placeholder={"Your Message*"} rows={8}></textarea>
                <button type={"submit"} className={s.contactsButton}>Send message</button>
            </form>
        </>
    );
};

export default ContactsForm;