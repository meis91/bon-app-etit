import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar"
import BaseContainer from "./components/BaseContainer";


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
        title: 'Mini Burger',
        category: 'Partyfood',
        image: 'https://drive.google.com/uc?export=view&id=1bhkz8EAq9_N40UdMp8OYMT6Z3gjvQeZW',
      },
      {
        title: 'Raspberry Cake',
        category: 'Cakes',
        image: 'https://drive.google.com/uc?export=view&id=1VTejIfB9z2JzCzzH1C8CFmAP_ksVtTNU',
      },
      {
        title: 'Kalbsrahmgulasch',
        category: 'Austrian',
        image: 'https://drive.google.com/uc?export=view&id=1ex4vk5o-j_mbyyU8F5lO3wsIAFqpSfLW',
      },
      {
        title: 'Pimientos de Padrón',
        category: 'Tapas',
        image: 'https://drive.google.com/uc?export=view&id=1S0UdestdwXNX-uswVGwrIhNN_VmNpMTO',
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
        title: 'Bacon-wrapped dates',
        category: 'Tapas',
        image: 'https://drive.google.com/uc?export=view&id=1zPIe9-XZA28agETM6YJfcplhCFZAZEe-',
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
        <Navbar title={post}/>
        <BaseContainer popularSearchTerms={popularSearchTerms} filterOptions={filterOptions} recipes={recipes}/>
        <Footer title={post} />

    </div>
  );
}

export default App;
