// import logo from './logo.svg';
import './App.css';
import {useState, useEffect } from 'react';

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("");
  const [pixelpaint, setPixelpaint] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <h1>teste</h1>  
    </div>
  );
}

export default App;
