import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({ allFoods, setAllFoods }) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setAllFoods([...allFoods, form]);

    setForm({
      name: '',
      image: '',
      calories: '',
      servings: '',
    });
  }

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={form.name}
        type="text"
        name="name"
        onChange={handleChange}
      />

      <label>Image</label>
      <Input
        value={form.image}
        type="text"
        name="image"
        onChange={handleChange}
      />

      <label>Calories</label>
      <Input
        value={form.calories}
        type="text"
        name="calories"
        onChange={handleChange}
      />

      <label>Servings</label>
      <Input
        value={form.servings}
        type="number"
        name="servings"
        onChange={handleChange}
      />

      <button onClick={handleSubmit} type="submit">
        Create
      </button>
    </form>
  );
}

export default AddFoodForm;
