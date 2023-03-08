
import {useContext, useEffect, useState} from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar"
import BaseContainer from "./components/Body/BaseContainer";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Route, Routes} from "react-router-dom";
import Recipe from "./components/Body/Recipe/Recipe";
import Login from "./components/User/Login";
import Registration from "./components/User/Registration";
import theme from "./theme/Theme";



function App() {
    const [title, setTitle] = useState("Bon APPetit");
    const [showAddRecipe, setShowAddRecipe] = useState(false);

    const handleAddRecipe = () => {
        setShowAddRecipe(!showAddRecipe);
    }

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Navbar titletheme={title} handleAddRecipe={handleAddRecipe}/>
                <Routes>
                    <Route path="/"
                           element={<BaseContainer addRecipe={showAddRecipe} handleAddRecipe={handleAddRecipe}/>}/>
                    <Route path="/recipe/:id" element={<Recipe/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                </Routes>
                <Footer />
            </ThemeProvider>
        </div>
    );
}

export default App;
