import React from 'react';

import { StudentsContainer } from '../StudentsContainer/StudentsContainer';
import { NumberOfStudents } from '../NumberOfStudents/NumberOfStudents';
import { InputForm } from '../InputForm/InputForm';
import { ModalHeader } from '../ModalHeader/ModalHeader';

import './HomeworkInput.css';

export const HomeworkInput = ({
        toggleModal,
        headerText,
        topic,
        deadline,
        duration,
        additionalInfo,
        theoryFile,
        exerciseFile,
        studentsList,
        handleDeadlineChange,
        handleTopicChange,
        handleAdditionalInfoChange,
        handleDurationChange,
        handleSeePreview,
        handleTheoryFile,
        handleExerciseFile,
        activeFilter,
    }) => {

    const metricsText = `${studentsList.length} aluno${studentsList.length !== 1 ? 's' : ''}`

    return (
        <div className='modal-wrapper'>
            <ModalHeader headerText={headerText} toggleModal={toggleModal} />
            <div className='modal-form'>
                <StudentsContainer
                    studentsList={studentsList}
                    showPhone={true}>
                    <NumberOfStudents metricsText={metricsText} />
                </StudentsContainer>
                <div className="input-form">
                    <InputForm
                        topic={topic}
                        deadline={deadline}
                        duration={duration}
                        additionalInfo={additionalInfo}
                        handleDeadlineChange={handleDeadlineChange}
                        handleTopicChange={handleTopicChange}
                        handleAdditionalInfoChange={handleAdditionalInfoChange}
                        handleDurationChange={handleDurationChange}
                        handleSeePreview={handleSeePreview}
                        theoryFile={theoryFile}
                        exerciseFile={exerciseFile}
                        handleTheoryFile={handleTheoryFile}
                        handleExerciseFile={handleExerciseFile}
                        activeFilter={activeFilter}
                    />
                </div>
            </div>
        </div>
    )
}