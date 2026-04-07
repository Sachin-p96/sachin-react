const RestauantCard = (props) => {
  const { listOfRestaurants } = props;

  return listOfRestaurants.map((restaurant) => { 
    console.log(restaurant.info.id, "restaurant");
    return (
      <div className="res-card" key={restaurant.info.id}>
        <h3>{restaurant.info.name}</h3>
        <h4>{restaurant.info.cuisines.join(", ")}</h4>
        <h4>{restaurant.info.avgRating} Stars</h4>
      </div>
    );
  });
};
export default RestauantCard;
