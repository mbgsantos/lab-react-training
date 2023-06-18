// function that takes a prop that represents the maximum numbers to display
const NumbersTable = ({limit}) => {
    // array using Array.from and set the length to the value of the 'limit' prop
    // the array will contain numbers from 1 to the limit
    const numbers = Array.from({length: limit}, (_, index) => index + 1);

    return (
        <div className="numbers-table">
            {/* map method over the array */}
            {/* render a div for each number */}
            {numbers.map((number) => (
                <div key={number} className={`number ${number % 2 === 0 ? 'even' : ''}`}>
                    {number}
                </div>
            ))}
        </div>
    );
};

export default NumbersTable;