import profiles from '../data/berlin.json';
import { useState } from 'react';

const Facebook = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
    };

    return (
        <div>
            <div className='country-buttons'>
                {profiles.map((profile) => (
                    <button
                    key={profile.country}
                    className={`country-button ${selectedCountry === profile.country ? 'selected' : ''}`}
                    onClick={() => handleCountryClick(profile.country)}
                    >
                        {profile.country}
                    </button>
                ))}
            </div>

            <div className='profiles'>
                {/* map method over the profiles array */}
                {/* render the profile information for each profile */}
                {profiles.map((profile) => (
                    <div 
                    key={profile.firstName + profile.lastName}
                    className={`profile ${selectedCountry === profile.country ? 'selected' : ''}`}
                    style={{ backgrounColor: profile.country === selectedCountry ? 'blue' : 'transparent'}}
                    >
                        <img src={profile.img} alt={`${profile.firstName} ${profile.lastName}`} />
                        <p><b>First Name: </b> {profile.firstName}</p>
                        <p><b>Last Name: </b> {profile.lastName}</p>
                        <p><b>Country: </b> {profile.country}</p>
                        <p><b>Type: {profile.isStudent ? 'Student' : 'Teacher'}</b></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Facebook;