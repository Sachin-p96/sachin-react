import { useEffect,useState} from "react";
import RestauantCard from "./RestauantCard";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    try {
      getDummyData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function getDummyData ()  {
  const resData = await fetch("https://namastedev.com/api/v1/listRestaurants");
  const data = await resData.json();

  // Add the extra .data 👇
  const restaurants = data.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
  setListOfRestaurants(restaurants);
  
  console.log(restaurants);
};

const handleToprated = () => {
  const filteredList = listOfRestaurants.filter((restaurant) => restaurant.info.avgRating > 4.3);
  setListOfRestaurants(filteredList);
}

  return (
    <div className="main-body">
      <div className="search-bar">
        <input placeholder="Search your restaurant" type="text"></input>
        <button className="search-button">Search</button>
        <button className="search-button" onClick = {handleToprated}>top-rated</button>
      </div>
      <div className="restaurant-list">
        <RestauantCard listOfRestaurants={listOfRestaurants}/>
      </div>
    </div>
  );
};

export default Body;
