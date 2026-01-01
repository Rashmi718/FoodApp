const RestaurantCard = ({ resData }) => {
  const data = resData.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          data.cloudinaryImageId
        }
      />

      <h3>{data.name}</h3>
      <h4>{data.cuisines.join(", ")}</h4>
      <h4>{data.costForTwo}</h4>
      <h4>
        {data.avgRating} ⭐ {data.sla.slaString}
      </h4>
      <h4>
        {data.locality}, {data.areaName}
      </h4>
    </div>
  );
};
export default RestaurantCard;
