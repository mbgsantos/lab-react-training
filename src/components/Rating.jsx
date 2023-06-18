// define component as a function that takes a prop called children
const Rating = ({children}) => {
    // calculate the number of filled stars - round the prop
    const stars = Math.round(children);
    // calculate the number of empty stars by subtracting the filled stars
    const emptyStars = 5 - stars;

    // define the icons
    const starsIcons = '★';
    const emptyStarsIcons = '☆';

    return (
        <div className="Stars">
            {/* Use the Array.fill method to create an array of span elements for the filled stars */}
            {/* Use the .map method over the array and render the filled star icon for each element */}
            {/* Done the same for the empty star */}
            {Array(stars)
                .fill(null)
                .map((_, index) => (
                    <span key={index}>{starsIcons}</span>
                ))
            }
            {Array(emptyStars)
                .fill(null)
                .map((_, index) => (
                    <span key={index}>{emptyStarsIcons}</span>
                ))
            }
        </div>
    );
};

export default Rating;