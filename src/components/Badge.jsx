
export default function Badge(props) {    
    let i = Math.floor(Math.random() * 6)
    const colorsArray = ["red", "orange", "yellow", "green", "blue", "violet"]
    return (
        <div className="Badge" style={{background: colorsArray[i]}}>
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