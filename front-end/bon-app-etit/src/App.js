import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";

const baseURL = "/api";

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
      <h1>Bon App Etit</h1>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
  );
}

export default App;
