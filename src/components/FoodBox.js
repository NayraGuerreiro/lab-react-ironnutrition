import { Card, Col, Button, Row } from 'antd';

function FoodBox({ food }) {
  const totalCalories = food.calories * food.servings;
  return (
    <Col>
      <Card
        title={food.name}
        style={{
          height: 300,
          margin: 10,
          width: 230,
        }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories:{food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {totalCalories}</b>
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
