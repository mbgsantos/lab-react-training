const IdCard = props => {
    return (
        <div className="IdCard">
            <div>
                <img className="IdCardImage" src={props.picture} alt="profile" />
            </div>
            <div className="IdCardInfo">
                <p><b>First Name: </b> {props.firstName} </p>
                <p><b>Last Name: </b> {props.lastName} </p>
                <p><b>Gender: </b> {props.gender} </p>
                <p><b>Height: </b> {props.height} </p>
                <p><b>Birth: </b> {props.birth} </p>
            </div>
        </div>
    )
};

export default IdCard;