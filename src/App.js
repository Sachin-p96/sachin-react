import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import './styles.css'



const RestauantCard = () => {
  return (
    <div className="res-card">
      <img src='https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1661394731/kuzprqrdpgifvssdl6zf.jpg' width='150' />
        <h3>Meghana Food</h3>
        <h4>North Indian, Biryani</h4>
        <h4>4.5 Stars</h4>  
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
