
export default function Badge(props) {    
    return (
        <div className="Badge" style={{background: props.color}}>
            <h1>Badge:</h1>
                <span>Name: {props.firstName} {props.lastName}</span>
                <span>Birth Place: {props.birthLoc}</span>
                <span>Email Address: {props.email}</span>
                <span>Phone Number: {props.phone}</span>
                <span>Favorite Food: {props.food}</span>
                <p>About Me: {props.about}</p>
        </div>
    )
}