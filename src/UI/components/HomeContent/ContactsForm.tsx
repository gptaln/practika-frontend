import React from 'react'
import {useForm} from 'react-hook-form'
import {TextInput} from 'react-materialize'

export const ContactsForm: React.FC = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <TextInput
                    label="Ваше имя"
                    placeholder="Например, Алина"
                    error="asdsad"
                    success="adsasdfff"
                    validate={true}
                    {
                        ...register("name", {required: true}) as any
                    }
                />
            </div>
            <div>
                <label>Ваш номер телефона</label>
                <input type="text" {...register("phone", {required: true})}  placeholder="8 (999) 999 99 99"/>
            </div>
            <div>
                <label>Сообщение</label>
                <input type="text" {...register("message")} placeholder="Чтобы вы хотели сказать"/>
            </div>
            <div>
                <button type="submit" className="popup__send">Отправить</button>
            </div>
        </form>
    )

}