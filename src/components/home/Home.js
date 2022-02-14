import Header from '/mnt/c/Users/MFC/travel-destination/src/components/header/Header.js';
import Tours from '/mnt/c/Users/MFC/travel-destination/src/components/tours/Tours.js';
import Footer from '/mnt/c/Users/MFC/travel-destination/src/components/footer/Footer.js';
const citiesData = require('/mnt/c/Users/MFC/travel-destination/src/data/db.json');
 

function Home(){

    return(
        
        <>  

        <Header/>

        <Tours data = {citiesData}/>

        <Footer/>

        </>
        
        
    )
}

export default Home;