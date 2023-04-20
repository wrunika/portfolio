import React from 'react';
import s from './Contacts.module.css';
import styleContainer from './../../common/styles/Container.module.css';

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form action="" className={s.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea rows={8}></textarea>
                </form>
                <button className={s.contactsButton}>Send</button>
            </div>
        </div>
    );
};