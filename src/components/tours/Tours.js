import './Tours.css';
import Tour from './tour/Tour';
import { Link } from 'react-router-dom';


function Tours(props) {

    return (
        <>
            {
                props.data2.map(value => {

                    return (

                        <Link to={`/city/${value.id}`}>

                            <Tour key={value.id} city={value} />

                        </Link>

                    );
                })
            }
        </>
    )
}

export default Tours;