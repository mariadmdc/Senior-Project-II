import React, { useEffect, useState } from 'react';
import './Schedule.css';

const Schedule = () => {
    const [signedUp, setSignedUp] = useState({
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

    const handleSignUp = async (date) => {
        const phoneNumber = prompt("Enter your phone number to receive a confirmation text:");

        if (!phoneNumber) {
            alert("Phone number is required to complete sign up.");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/send-confirmation', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phoneNumber, date })
            });

            if (response.ok) {
                setSignedUp((prevState) => ({
                    ...prevState,
                    [date]: true
                }));
                alert('Thanks for signing up! You’ll get a confirmation text shortly.');
            } else {
                alert('Signup worked, but there was an issue sending the confirmation text.');
            }
        } catch (error) {
            console.error('Error sending text:', error);
            alert('There was an error sending your confirmation text.');
        }
    };

    useEffect(() => {
        const initMap = () => {
            const map = new window.google.maps.Map(document.getElementById("map"), {
                zoom: 12,
                center: { lat: 33.9707, lng: -118.4182 },
            });

            const directionsService = new window.google.maps.DirectionsService();
            const directionsRenderer = new window.google.maps.DirectionsRenderer();
            directionsRenderer.setMap(map);

            directionsService.route(
                {
                    origin: "LMU Lair, Los Angeles, CA",
                    destination: "St. Joseph's Center, Venice, CA",
                    travelMode: window.google.maps.TravelMode.DRIVING,
                },
                (response, status) => {
                    if (status === "OK") {
                        directionsRenderer.setDirections(response);
                    } else {
                        alert("Directions request failed due to " + status);
                    }
                }
            );
        };

        if (!window.google) {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
            script.async = true;
            script.defer = true;
            window.initMap = initMap;
            document.head.appendChild(script);
        } else {
            initMap();
        }
    }, []);

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
                    {[
                        { date: 'april20', label: 'Sunday, April 20, 2025' },
                        { date: 'april27', label: 'Sunday, April 27, 2025' },
                        { date: 'may4', label: 'Sunday, May 4, 2025' },
                        { date: 'may11', label: 'Sunday, May 11, 2025' },
                    ].map(({ date, label }) => (
                        <tr key={date}>
                            <td>{label}</td>
                            <td>8:00 AM</td>
                            <td>LMU Lair &rarr; St. Joseph's Center</td>
                            <td>
                                <button
                                    className="signup-btn"
                                    onClick={() => handleSignUp(date)}
                                    disabled={signedUp[date]}
                                >
                                    {signedUp[date] ? '✓ Signed Up' : 'Sign Up'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1 className="route-title">Route</h1>
            <div
                id="map"
                style={{
                    height: "500px",
                    width: "100%",
                    borderRadius: "12px",
                    marginTop: "20px"
                }}
            ></div>
        </div>
    );
};

export default Schedule;
