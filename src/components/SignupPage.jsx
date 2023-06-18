import { useState } from "react";

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nationality, setNationality] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleNationalityChange = (event) => {
        setNationality(event.target.value);
    };

    const isEmailValid = () => {
        return email.includes('@');
    };

    const isPasswordStrong = () => {
        return password.length >= 8;
    };

    const renderGreeting = () => {
        if (nationality === 'en') {
            return <p>Hello</p>;
        } else if (nationality === 'de') {
            return <p>Hallo</p>;
        } else if (nationality === 'fr') {
            return <p>Bonjour</p>;
        }
        return null;
    };

    return (
        <div>
            <input type="email" value={email} onChange={handleEmailChange} style={{borderColor: isEmailValid() ? 'green' : 'red' }} />
            <input type="password" value={password} onChange={handlePasswordChange} style={{borderColor: isPasswordStrong() ? 'green' : 'red' }} />
            <select value={nationality} onChange={handleNationalityChange} >
                <option value="en">English</option>
                <option value="de">German</option>
                <option value="fr">French</option>
            </select>
            {renderGreeting()}
            <p>Your email is {email}</p>
        </div>
    );
};

export default SignupPage;