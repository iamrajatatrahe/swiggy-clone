import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId, 'resId');
  const dummy = "Dummy Data";

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo, 'resInfo');
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  // const { name, cuisines, costForTwoMessage } =
  //   resInfo?.card?.card?.info;

  const { itemCards } =
    resInfo?.card?.card;
    console.log(itemCards, 'itemCards');

  // const categories =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //     (c) =>
  //       c.card?.["card"]?.["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   );
  // //console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      {/* <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p> */}
      {/* categories accordions */}
      {itemCards.map((category, index) => (
        // controlled component
        <RestaurantCategory
          // key={category[index]?.card?.info?.id}
          data={category}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
