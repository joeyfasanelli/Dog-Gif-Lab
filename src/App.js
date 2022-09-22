import React, { useState } from "react";
import Button from "./components/Button";
import Gif from "./components/Gif";
import './App.css';

export default function App() {
  const [gifImg, setGifImg] = useState({});

  const handleClick = async () => {
    const gifImg = `https://dog.ceo/api/breeds/image/random`;

    const response = await fetch(gifImg);
    const data = await response.json();
    setGifImg(data);
  };

  return (
    <div className="App">
     <h1>Random Dog Generator</h1>
     <Button handleClickApp={handleClick} />
     <Gif gifImg={gifImg}/>
    </div>
  )
}
