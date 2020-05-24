import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import "./ExerciseSent.css"

export const ExerciseSent = () => {
    const [shouldShowAlert, setShouldShotAlert] = useState(true)
    const handleDismissClick = () => {
        setShouldShotAlert(false)
    }

    return (
        shouldShowAlert &&
        <div className="exercise-wrapper">
            <div className="text-wrapper">
                <div className="exercise-confirm-header">
                    Exercício enviado com sucesso!
                </div>
            </div>
            <div className='exercise-dismiss' onClick={handleDismissClick}>
                <IoMdClose/>
            </div>

        </div>
    )
}