import React, { useEffect, useState } from 'react';
import './Schedule.css';
import frnRoute from './frnroute.jpeg';

const Schedule = () => {
    const [signedUp, setSignedUp] = useState({
        april6: false,
        april13: false,
        april20: false,
        april27: false,
        may4: false,
        may11: false
    });

    useEffect(() => {
        document.body.classList.add('schedule-page');
        return () => {
            document.body.classList.remove('schedule-page');
        };
    }, []);

    const handleSignUp = (date) => {
        setSignedUp((prevState) => ({
            ...prevState,
            [date]: true
        }));
    };

    return (
        <div className="schedule-page">
            <h2 className="schedule-title">Volunteer Schedule</h2>
            <h1 className="semester-title">Spring 2025</h1>
            <table className="schedule-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Pickup Time</th>
                        <th>Route</th>
                        <th>Sign Up</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sunday, April 6, 2025</td>
                        <td>8:00 AM</td>
                        <td> LMU Lair &rarr; St. Joseph's Center </td>
                        <td>
                            <button
                                className="signup-btn"
                                onClick={() => handleSignUp('april6')}
                                disabled={signedUp.april6}
                            >
                                {signedUp.april6 ? '✓ Signed Up' : 'Sign Up'}
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Sunday, April 13, 2025</td>
                        <td>8:00 AM</td>
                        <td> LMU Lair &rarr; St. Joseph's Center </td>
                        <td>
                            <button
                                className="signup-btn"
                                onClick={() => handleSignUp('april13')}
                                disabled={signedUp.april13}
                            >
                                {signedUp.april13 ? '✓ Signed Up' : 'Sign Up'}
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Sunday, April 20, 2025</td>
                        <td>8:00 AM</td>
                        <td> LMU Lair &rarr; St. Joseph's Center </td>
                        <td>
                            <button
                                className="signup-btn"
                                onClick={() => handleSignUp('april20')}
                                disabled={signedUp.april20}
                            >
                                {signedUp.april20 ? '✓ Signed Up' : 'Sign Up'}
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Sunday, April 27, 2025</td>
                        <td>8:00 AM</td>
                        <td> LMU Lair &rarr; St. Joseph's Center </td>
                        <td>
                            <button
                                className="signup-btn"
                                onClick={() => handleSignUp('april27')}
                                disabled={signedUp.april27}
                            >
                                {signedUp.april27 ? '✓ Signed Up' : 'Sign Up'}
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Sunday, May 4, 2025</td>
                        <td>8:00 AM</td>
                        <td> LMU Lair &rarr; St. Joseph's Center </td>
                        <td>
                            <button
                                className="signup-btn"
                                onClick={() => handleSignUp('may4')}
                                disabled={signedUp.may4}
                            >
                                {signedUp.may4 ? '✓ Signed Up' : 'Sign Up'}
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Sunday, May 11, 2025</td>
                        <td>8:00 AM</td>
                        <td> LMU Lair &rarr; St. Joseph's Center </td>
                        <td>
                            <button
                                className="signup-btn"
                                onClick={() => handleSignUp('may11')}
                                disabled={signedUp.may11}
                            >
                                {signedUp.may11 ? '✓ Signed Up' : 'Sign Up'}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h1 className="route-title"> Route </h1>
            <img
            src={frnRoute}
            alt="delivery route"
            className="map-image"
          />
        </div>
    );
};

export default Schedule;
