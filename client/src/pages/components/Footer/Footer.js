import React, { useState, useEffect} from 'react'
import moment from 'moment';
import './footer.css';

const Footer = () => {
    const [expTime, setExpTime] = useState('');
    const [rushStatus, setRushStatus] = useState('');

    const handleRush = () => {
        const current_day = moment().format('dddd');
        const digit_time = moment().format('Hm');
        if (current_day === 'Saturday' || current_day === 'Sunday') return 'Non-Rush';
        if (digit_time > 600 && digit_time < 901) return 'Rush';
        if (digit_time > 1500 && digit_time < 1831) return 'Rush';
        return 'Non-Rush';
    };

    useEffect(() => {
        setRushStatus(handleRush());
        setExpTime(moment().add(2, 'h').add(17, 'm').format('LLL'));
    }, []);

    return (
        <div id="footer">
            <p>Adult / {rushStatus ? rushStatus : '...loading...'} Hour Fare</p>
            <p>Minneapolis/&#226;&#9633;&#9633;St. Paul Metro Area</p>
            <p>Expires {expTime}</p>
        </div>
    )
}

export default Footer