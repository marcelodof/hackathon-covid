import React from 'react';
import { FiWifi } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go'
import { FaWhatsapp } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';

import './StudentItem.css';

export const StudentItem = ({name, hasAddress, hasWhatsApp, hasWifi, phone, showPhone, homeworkHasBeenSent}) => {
    return (
        <div className={`item-container ${homeworkHasBeenSent ? 'sent' : null}`}>
            <div className="student-name">
                {name}
                {homeworkHasBeenSent && <FaCheck style={{color: '#008744'}} className="check-icon" />}
            </div>
            {showPhone 
            ? <div className='student-phone'>
                <AiFillPhone className="phone-icon" /> {phone}
            </div>
            : <div className="icons-container">
                <GoLocation style={!hasAddress && {color: '#d62d20'}} className="icon" />
                <FaWhatsapp style={!hasWhatsApp && {color: '#d62d20'}} className="icon"/>
                <FiWifi style={!hasWifi && {color: '#d62d20'}} className="icon" />
            </div>
            }
        </div>
    )
}