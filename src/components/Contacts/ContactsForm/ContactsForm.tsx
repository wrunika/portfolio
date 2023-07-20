import React from 'react';
import s from './ContactsForm.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';


type InputsType = {
    name: string
    email: string
    message: string
}
const ContactsForm = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<InputsType>()
    const onSubmit: SubmitHandler<InputsType> = (data) => {
        console.log(data)
            //axios.post('http://localhost:3010/sendMessage', data)
            axios.post('https://gmail-nodejs-rho.vercel.app/sendMessage', data)
            .then(() => {
                console.log('your message has been sent')
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={s.contactsForm}>
                <input placeholder={"Name*"} {...register('name')} type="text"/>
                <input placeholder={"Email*"} {...register('email')} type="text"/>
                <textarea placeholder={"Your Message*"} {...register('message')} rows={8}></textarea>
                <button type={"submit"} className={s.contactsButton}>Send message</button>
            </form>
        </>
    );
};

export default ContactsForm;