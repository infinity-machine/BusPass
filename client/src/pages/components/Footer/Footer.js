import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './footer.css';

const Footer = (props) => {
    const [expTime, setExpTime] = useState('');
    const [rushStatus, setRushStatus] = useState('');

    const handleRush = () => {
        const current_day = moment().format('dddd');
        const digit_time = moment().format('Hm');
        if (current_day === 'Saturday' || current_day === 'Sunday') return 'Non-Rush Hour';
        if (digit_time > 600 && digit_time < 901) return 'Rush Hour / M-F 6-9am and 3-6:30pm';
        if (digit_time > 1500 && digit_time < 1831) return 'Rush Hour / M-F 6-9am and 3-6:30pm';
        return 'Non-Rush Hour';
    };

    useEffect(() => {
        setRushStatus(handleRush());
        setExpTime(moment().add(2, 'h').add(17, 'm').format('LLL'));
    }, []);

    return (
        <div id="footer">
            <div>
                <p>Adult / {props.express ? 'Express / ' : ''}{rushStatus ? rushStatus : '...loading...'}</p>
                <p>Minneapolis/St. Paul</p>
            </div>
            <p id="expiration">Expires {expTime}</p>
        </div>
    );
};

export default Footer;