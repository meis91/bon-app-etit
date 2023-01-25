import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import InputSelectMeasurement from "./components/InputSelectMeasurement";
import InputTextIngredient from "./components/InputTextIngredient";
import InputIngredient from "./components/InputIngredient";

const baseURL = "http://localhost:8000/api";

function App() {
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

  return (
    <div className="App">
        <Navbar title={post}/>
        <InputIngredient/>

    </div>
  );
}

export default App;
