import { useState } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./../components/AddFoodForm";
import Search from "antd/lib/transfer/search";

function FoodList(props) {
  const [food, setFood] = useState(props.food);

  const addFood = (foodObj) => {
    const updatedFoods = [foodObj, ...food];

    setFood(updatedFoods);
  };

  const deleteFood = (foodName) => {
    const filteredFoods = food.filter((dish) => {
      return dish.name !== foodName;
    });

    setFood(filteredFoods);
  };

  return (
    <div className="App">
      <Search />
      <AddFoodForm addFood={addFood} />
      <div className="dishGrid">
        {food.map((dish) => (
          <FoodBox food={dish} deleteFood={deleteFood} />
        ))}
      </div>
    </div>
  );
}

export default FoodList;
