import './Tours.css';
import Tour from './tour/Tour';
import { Link } from 'react-router-dom';


function Tours(props) {

    return (
        <div className="over">
            {
                props.data.map(city => {

                    return (
                        // <div key={city.id} style={{ padding: 20 }}>
                        //     <h2>{city.name}</h2>
                        //     <img className="imgSize" src={city.image} alt={city.name} />
                        //     <h4>{city.info}</h4>
                        //     <h4 className="price">Price:{city.price}</h4>
                        //     <br></br>
                        //     <hr></hr>
                        // </div>
                        <Link to={`/city/${city.id}`}>
                            <Tour key={city.id} data={city} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Tours;