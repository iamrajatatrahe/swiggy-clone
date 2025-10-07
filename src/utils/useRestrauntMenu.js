import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    if (!resId) return;
    fetchData();
  }, [resId]);
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2], 'menu');
    setResInfo(json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]);
  };

  return resInfo;
};

export default useRestaurantMenu;
