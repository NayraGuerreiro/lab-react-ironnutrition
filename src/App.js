import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App(props) {
  const [allFoods, setAllfoods] = useState(foods);

  return (
    <div className="App">
      {allFoods.map((food) => {
        return <FoodBox food={food} />;
      })}

      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />
    </div>
  );
}

export default App;
