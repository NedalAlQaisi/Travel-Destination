import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';


function Home(props) {

    return (

        <>

            <Header />

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Tours data2={props.data} />

            <Footer />

        </>


    );
}

export default Home;