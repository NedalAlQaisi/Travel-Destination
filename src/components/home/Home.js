import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';


function Home(props) {

    return (

        <>

            <Header />

            <Tours data={props.citiesData} />

            <Footer />

        </>


    )
}

export default Home;