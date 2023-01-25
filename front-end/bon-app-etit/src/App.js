import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import MainBar from './components/MainBar';

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
      {  'filter' : 'Nutrition Type', 
        'options' : ['Vegetarian',
                      'Vegan',
                      'Gluten-free',
                      'Dairy-free'
                    ]},
      {  'filter' : 'Recipe Type',  
          'options' : ['Quick',
                      'Easy',
                      'Healthy',
                      'Low Budget'
                    ],
      }
    ];

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

  return (
    <div className="App">
      <h1>{post}</h1>
      <MainBar popularSearchTerms={popularSearchTerms}
               filterOptions={filterOptions} 
       />
    </div>
  );
}

export default App;
