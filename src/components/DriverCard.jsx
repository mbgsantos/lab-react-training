// define component as a function that takes the props asked in the exercise
const DriverCard = ({name, rating, img, car}) => {
    const {model, licensePlate} = car;

    // calculate the rounded star rating
    const starRating = Math.round(rating);

    // define the icons
    const starsIcons = '★';
    const emptyStarsIcons = '☆';

    return (
        <div className="DriverCard">
            <img src={img} alt="" className="DriverImage" />
            <div className="DriverInfo">
                <h2>{name}</h2>
                <div className="Rating">
                    {Array(starRating)
                        .fill(null)
                        .map((_, index) => (
                            <span key={index}>{starsIcons}</span>
                        ))
                    }
                    {Array(5 - starRating)
                        .fill(null)
                        .map((_, index) => (
                            <span key={index}>{emptyStarsIcons}</span>
                        ))
                    }
                </div>
                <p> {model} - {licensePlate} </p>
            </div>
        </div>
    );
};

export default DriverCard;