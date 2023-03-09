import React, { useEffect, useState} from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar"
import {ThemeProvider} from "@mui/material/styles";
import {Route, Routes} from "react-router-dom";
import Recipe from "./components/RecipeDetails/Recipe";
import Login from "./components/User/Login";
import Registration from "./components/User/Registration";
import theme from "./context/theme/Theme";
import PostNewRecipe from "./components/RecepieForm/PostNewRecipe";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import IndexPage from "./components/Body/Recipes/IndexPage";
import {UserContext} from "./context/UserContext";



function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if(sessionStorage.getItem("loggedIn")){
            setUser(sessionStorage.getItem("username"))
        } else {
            setUser(null);
        }
    }, );

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <UserContext.Provider value={{user, setUser}}>
                <Navbar/>
                <React.Fragment>
                    <CssBaseline/>
                    <Container maxWidth={false}
                               sx={{
                                   bgcolor: '#f6f6f6',
                                   pt: 8,
                                   pb: 6,
                               }}
                    >
                        <Routes>
                            <Route path="/" element={<IndexPage/>}/>
                            <Route path="/recipe/:id" element={<Recipe/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/registration" element={<Registration/>}/>
                            <Route path="/add-recipe" element={<PostNewRecipe/>}/>
                        </Routes>
                    </Container>
                </React.Fragment>
                <Footer/>
                </UserContext.Provider>
            </ThemeProvider>
        </div>
    );
}

export default App;
