import React, {useEffect, useRef, useState} from 'react'

interface IModal {
    title?: string
    btnText?: string
}

export const Modal: React.FC<IModal> = ({title, btnText, children}) => {

    const [displayMode, setDisplayMode] = useState(false)

    const handleOpen = () => {
        setDisplayMode(true)
    }

    const handleClose = () => {
        setDisplayMode(false)
    }

    return (
        <>

            <button className="popup__form" id="myBtn" onClick={handleOpen}>
                {btnText ?? `Отправить сообщение`}
            </button>

            {
                displayMode && (
                    <div id="mypopup" className="popup">
                        <header className="popup__header">
                            {
                                title &&
                                    <h2 title="Форма отправки сообщения мне в телеграмм">
                                        {title}
                                    </h2>
                            }
                            <span id="close" onClick={handleClose}>&times;</span>
                        </header>
                        <div>
                            {children}
                        </div>
                    </div>
                )
            }

        </>
    )

}