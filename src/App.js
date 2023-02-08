import { Row, Divider, Button, Input } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [allFoods, setAllFoods] = useState(foods);

  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods} />

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {allFoods.map((food) => {
          return (
            <FoodBox
              food={food}
              key={food.name}
              allFoods={allFoods}
              setAllFoods={setAllFoods}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
