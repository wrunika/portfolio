import React, {useState} from 'react';
import s from './ContactsForm.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';


type InputsType = {
    name: string
    email: string
    message: string
}
const ContactsForm = () => {

    const [infoMessage, setInfoMessage] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const {
        register,
        handleSubmit,
        //watch,
        formState: { errors },
        reset
    } = useForm<InputsType>()
    const onSubmit: SubmitHandler<InputsType> = (data) => {
        setIsDisabled(true);
        console.log(data)
            //axios.post('http://localhost:3010/sendMessage', data)
            axios.post('https://gmail-nodejs-rho.vercel.app/sendMessage', data)
            .then(() => {
                console.log('your message has been sent')
                reset();
                setIsDisabled(false);
                setInfoMessage(true);
                setTimeout(() => {
                    setInfoMessage(false);
                }, 4500)
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={s.contactsForm}>
                <input placeholder={"Name*"} {...register('name', {required: true})} type="text"/>
                {errors.name && <div className={s.error}>The field is required</div>}
                <input placeholder={"Email*"} {...register('email', {required: true, pattern: /^[^@]+@[^@]+\.[^@]+$/i})} type="text"/>
                {errors.email && <div className={s.error}>The field is required and should be correct</div>}
                <textarea placeholder={"Your Message*"} {...register('message', {required: true, maxLength: 300})} rows={8}></textarea>
                {errors.message && <div className={s.error}>The field is required and should be shorter than 300 symbols</div>}
                <button disabled={isDisabled} type={"submit"} className={s.contactsButton + ' ' + (isDisabled ? s.disabledButton : '')}>Send message</button>
            </form>

            {infoMessage && <div className={s.infoMessage}>
                Thank You, Your message has been sent. I will definitely contact You.
            </div>}
        </>
    );
};

export default ContactsForm;