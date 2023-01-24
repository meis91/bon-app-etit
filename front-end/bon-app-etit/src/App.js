import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";

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
      <h1>{post}</h1>
    </div>
  );
}

export default App;
