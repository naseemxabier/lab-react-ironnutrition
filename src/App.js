// src/App.js
import './App.css';
import foodsAll from "./foods.json";
import { useState } from "react"
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'
import Search from './components/Search'
import { Row, Divider, Button } from 'antd';
function App() {
  const [food, setFood] = useState(foodsAll)
  const [foodCopy, setFoodCopy] = useState(foodsAll)
  const addFood = (foodie) => {
    setFood([...food, foodie]);
    setFoodCopy([...food, foodie]);
  }
  const filter = (filtrar) => {
    if (filtrar ==="") {
   setFood(foodCopy)
    }
    else{setFood(food.filter(food => (food.name.toLowerCase().includes(filtrar.toLowerCase()))))}
    
  }

  const deleteHandler = (name) => {
  (food.filter(food => food.name !== name))
  }

  return <div className="App">
    {/* Display Add Food component here */}
<AddFoodForm addFood = {addFood}/>
    <Button> Hide Form / Add New Food </Button>
   <Search filter = {filter} />

    {/* Display Search component here */}

    <Divider>Food List</Divider>

    <Row style={{ width: '100%', justifyContent: 'center' }}>
      {food.map((index, k) => (<FoodBox name={index.name} calories={index.calories} image={index.image} servings={index.servings} deleteHandler = {()=>deleteHandler(index.name)} key={k} />))}
    </Row>
  </div>

}
export default App;