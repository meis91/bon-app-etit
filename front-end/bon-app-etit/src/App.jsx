import React, {useContext, useEffect, useState} from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar"
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Route, Routes} from "react-router-dom";
import Recipe from "./components/Body/Recipe/Recipe";
import Login from "./components/User/Login";
import Registration from "./components/User/Registration";
import theme from "./theme/Theme";
import PostNewRecipe from "./components/Body/RecepieForm/PostNewRecipe";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import IndexPage from "./components/Body/Recipes/IndexPage";
import axios from "./api/axios";
import {TAGS_URL} from "./constants";


function App() {
    const [user, setUser] = useState("");
    const[tags, setTags] = useState(null)

    useEffect(() => {
        axios.get(TAGS_URL).then((response) => {
            setTags(response.data);
        })
    }, []);

    if (!tags) return null;

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
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
                            <Route path="/" element={<IndexPage tags={tags}/>}/>
                            <Route path="/recipe/:id" element={<Recipe/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/registration" element={<Registration/>}/>
                            <Route path="/add-recipe" element={<PostNewRecipe tags={tags}/>}/>
                        </Routes>
                    </Container>
                </React.Fragment>
                <Footer/>
            </ThemeProvider>
        </div>
    );
}

export default App;
