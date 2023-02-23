import './App.css';
import axios from "axios";
import React, {useEffect, useState} from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar"
import BaseContainer from "./components/Body/BaseContainer";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Route, Routes} from "react-router-dom";
import IndexPage from "./components/Body/Recipes/IndexPage";
import Recipe from "./components/Body/Recipe/Recipe";
import Login from "./components/User/Login";
import Registration from "./components/User/Registration";


const theme = createTheme({
    palette: {
        primary: {
            light: '#4d4d52',
            main: '#2c2c2f',
            dark: '#111111',
            contrastText: '#fff',
        },
        secondary: {
            light: '#be9655',
            main: '#c78f46',
            dark: '#de7e2d',
            contrastText: '#000',
        },
        error: {
          light: '#ad0404',
          main: '#8a0303',
          dark: '#680202',
          contrastText: '#000',
      },
    },
});


const baseURL = "http://localhost:8000/api";

function App() {
    const [title, setTitle] = useState(null);
    const [showAddRecipe, setShowAddRecipe] = useState(false);



    const handleAddRecipe = () =>{
        console.log(showAddRecipe)
        setShowAddRecipe(!showAddRecipe);
    }

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setTitle(response.data);
        });
    }, []);
    if (!title) return null;

  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <Navbar title={title} handleAddRecipe={handleAddRecipe}/>
            <Routes>
                <Route path="/" element={<BaseContainer addRecipe={showAddRecipe} handleAddRecipe={handleAddRecipe} baseUrl={baseURL} />} />
                <Route path="/recipe/:id" element={<Recipe />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/registration" element={<Registration/>} />
            </Routes>
            <Footer theme={theme} title={title} />
        </ThemeProvider>
    </div>
  );
}

export default App;
