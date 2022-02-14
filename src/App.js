import './App.css';
import Home from "./components/home/Home";
const citiesData = require('./data/db.json');


function App() {
    return (
    <>
        <Home citiesData = {citiesData}/>
    </> 
    );
}

export default App;