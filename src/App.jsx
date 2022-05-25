import "./App.css";
import foods from "./foods.json";
import FoodList from "./components/FoodList";

function App() {
  return (
    <div className="foodContainer">
      <FoodList food={foods}/>
    </div>
  );
}

export default App;
