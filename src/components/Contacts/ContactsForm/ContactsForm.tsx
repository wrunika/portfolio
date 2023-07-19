import React from 'react';
import s from './ContactsForm.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';


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
    const onSubmit: SubmitHandler<InputsType> = (data) => console.log(data)

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