import './App.css';
import Home from "./components/home/Home";
import TourDetails from "./components/TourDetails/TourDetails"
import { Routes, Route } from "react-router-dom";
import citiesData from "./data/db.json"


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home data={citiesData} />} />
                <Route path="/city/:id" element={<TourDetails data={citiesData} />} />
            </Routes>
        </>
    );
}

export default App;