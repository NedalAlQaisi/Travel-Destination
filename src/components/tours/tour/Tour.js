import './Tour.css'

function Tour(props) {

    return (
        <>
            <div style={{ padding: 20 }}>
                <h2>{props.city.name}</h2>
                <img className="imgSize" src={props.city.image} alt={props.city.name} />
                <h4>{props.city.info}</h4>
                <h4 className="price">Price:{props.city.price}</h4>
                <br></br>
                <hr></hr>
            </div>
        </>
    )
}
export default Tour;