import { useEffect } from "react";
const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu;
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5269665&lng=88.3796537&restaurantId=208994&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json(); 
    console.log(json);
  };

  return (
    <div className="menu">
      <h1> Name of the Restaurant</h1>
      <h2> Menu</h2>
      <ul>
        <li>momo</li>
        <li>Burgers</li>
        <li>Diet coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
