import RestaurantCard from "./RestaurantCard";
import resList from "../util/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [topRestaurants, setTopRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5269665&lng=88.3796537&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING "
    );

    const json = await data.json();
    console.log(json.data.cards);
    setTopRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  //https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.296059&lng=85.824539&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
  //https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9286146&lng=77.6371602&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

  if (topRestaurants.length == 0) {
    return <h1> Loading...</h1>;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            placeholder="search foods here..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filterRestaurant = topRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilterRestaurant(filterRestaurant);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterRestaurant = topRestaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setTopRestaurants(filterRestaurant);
          }}
        >
          top rated restaurant
        </button>
      </div>

      <div className="res-container">
        {topRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
