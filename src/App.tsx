import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./compoments/header/header";
import { CarouselRoot } from "./compoments/carousel";
import { TextSlogan } from "./compoments/text-slogan";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <CarouselRoot />
        <TextSlogan />
      </header>
    </div>
  );
}

export default App;
