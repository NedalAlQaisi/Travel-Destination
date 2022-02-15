import './App.css';
import Home from "./components/home/Home";
import TourDetails from "./components/TourDetails/TourDetails";
import { Routes, Route } from "react-router-dom";

const citiesData = require('./data/db.json');


function App() {
    return (
        <>
            <Routes>
                <Route path="/" page={<Home data={citiesData} />} />
                <Route path="/city/:id" page={<TourDetails data={citiesData} />} />
            </Routes>
        </>
    );
}

export default App;