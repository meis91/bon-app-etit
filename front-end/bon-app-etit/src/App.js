import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar"
import BaseContainer from "./components/BaseContainer";
import {createTheme, ThemeProvider} from '@mui/material/styles';

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
    },
});


const baseURL = "http://localhost:8000/api";

function App() {
    const [post, setPost] = useState(null);

    const popularSearchTerms = ['Pasta', 'Vegan', 'Quick Dinner', 'Cocktail'];

    const filterOptions = [
      { 'filter' : 'Dish Type',
        'options' : ['Breakfast',
                      'Lunch',
                      'Dinner'
                    ]},
      {  'filter' : 'Recipe Type',
          'options' : ['Quick',
                      'Easy',
                      'Healthy',
                      'Low Budget'
                    ],
      },
      {  'filter' : 'Nutrition Type',
        'options' : ['Vegetarian',
                      'Vegan',
                      'Gluten-free',
                      'Dairy-free'
                    ]},
      {  'filter' : 'Season/Special',
        'options' : ['Spring',
                      'Summer',
                      'Autumn',
                      'Winter',
                      'Christmas',
                      'Easter'
                    ]},
      {  'filter' : 'Bakery',
          'options' : ['Cookies',
                      'Cakes',
                      'Bread',
                      'Ice Cream'
                    ]},
      {  'filter' : 'Country',
      'options' : ['Juice/Lemonade',
                  'Smoothies',
                  'Cocktails',
                  'Winter Drinks'
                ]},
    ];

    const recipes = [
      {
        title: 'Bacon-wrapped Dates',
        category: 'Tapas',
        image: 'https://drive.google.com/uc?export=view&id=1it1qSijnfuk4fs-Li5WB6O6Y9wixsQSw',
      },
      {
        title: 'Raspberry Chocolate Cake',
        category: 'Cakes',
        image: 'https://drive.google.com/uc?export=view&id=13dRBk9Ql3xnbnYqsY6o_hn-Gsysw-w3G',
      },
      {
        title: 'Beet Carpaccio',
        category: 'Healthy',
        image: 'https://drive.google.com/uc?export=view&id=1tW1PBg65Qrf9mLpWccPU-_LODFJ84h4d',
      },
      {
        title: 'Saltimbocca',
        category: 'Italian',
        image: 'https://drive.google.com/uc?export=view&id=1QGwht-T6a8IdGLfZmJit8mQzd1kdi8gi',
      },
      {
        title: 'Beef tartare',
        category: 'Starter',
        image: 'https://drive.google.com/uc?export=view&id=1kcnP7KXaCPfDTZjFDhZCiaFst5Nq_qDB',
      },
      {
        title: 'Vanilla Cream',
        category: 'Dessert',
        image: 'https://drive.google.com/uc?export=view&id=1-vWk037Yc4j_4lOnde0pwKCXgIfvvlLN',
      },
      {
          title: 'Sushi Plate',
          category: 'Asian',
          image: 'https://drive.google.com/uc?export=view&id=1QK-nSwgdGG2REYxYtdnr_l-tbjotO9IQ',
      },
      {
        title: 'Pizza Neapoletana',
        category: 'Pizza',
        image: 'https://drive.google.com/uc?export=view&id=11IrwX62XpGumI6TBBH1CTtTXybAjNrOb',
      },
      {
        title: 'Kalbsrahmgulasch',
        category: 'Austrian',
        image: 'https://drive.google.com/uc?export=view&id=1ex4vk5o-j_mbyyU8F5lO3wsIAFqpSfLW',
      },
      {
        title: 'Tafelspitz',
        category: 'Austrian',
        image: 'https://drive.google.com/uc?export=view&id=1knGmSWJQ7dA4qv3TkEBs7f4NcH6fA8YY',
      },
      {
        title: 'Mini Burger',
        category: 'Partyfood',
        image: 'https://drive.google.com/uc?export=view&id=1bhkz8EAq9_N40UdMp8OYMT6Z3gjvQeZW',
      },
      {
        title: 'Mac `n Cheese',
        category: 'Vegetarian',
        image: 'https://drive.google.com/uc?export=view&id=1GEo2tX-qdtodqdlBa0Qjt4UwQKLwc3Ma',
      },
  ];

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <Navbar title={post}/>
            <BaseContainer popularSearchTerms={popularSearchTerms} filterOptions={filterOptions} recipes={recipes}/>
            <Footer theme={theme} title={post} />
        </ThemeProvider>
    </div>
  );
}

export default App;
