import visaImg from '../assets/images/visa.png';

const CreditCard = ({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color
}) => {
    const lastFourDigits = number.slice(-4);

    const cardLogo = type === 'Visa' 
        ? <img src={visaImg} alt="" />
        : 'https://w7.pngwing.com/pngs/23/320/png-transparent-mastercard-credit-card-visa-payment-service-mastercard-company-orange-logo.png';

    const formattedMonth = expirationMonth.toString().padStart(2, '0');
    const formattedYear = expirationYear.toString().slice(-2);

    return (
        
        <div className="CreditCardCard"
        style={{
            backgroundColor: bgColor,
            color: color,
        }}>
            <img className="CreditImage" src={cardLogo} alt={type} />
            <div className="CreditNumbers" >
                <span>**** **** **** </span>
                <span>{lastFourDigits}</span>
            </div>
            <div style={{marginBottom: '10px'}}>
                <span>
                    Expires {formattedMonth} / {formattedYear}
                </span>
                <span style={{marginLeft: '5rem'}}>{bank}</span>
            </div>
            <div>{owner}</div>
        </div>
        
    );
};

export default CreditCard;