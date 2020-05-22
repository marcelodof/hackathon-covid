import React from 'react';

import { StudentItem } from '../StudentItem/StudentItem';

import './StudentsContainer.css'

export const StudentsContainer = ({studentsList}) => {
    return (
        <div className="students-container">
            {
                studentsList.map((student) => {
                    return <StudentItem 
                            name={student.name}
                            hasAddress={student.hasAddress}
                            hasSmartphone={student.hasSmartphone}
                            has3G={student.has3G}
                            hasWifi={student.hasWifi}
                            hasResponsible={student.hasResponsible}
                            />
                })
            }            
        </div>
    )
}