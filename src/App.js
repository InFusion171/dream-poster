import React from 'react'
import Navbar from "./containers/navbar/Navbar";
import Header from "./containers/header/Header";
import Body from "./containers/body/Body";
import Footer from "./containers/footer/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
        <div>
            <Navbar />
            <Header />
            <Body />
            <Footer />
        </div>
    </div>
  )
}

export default App