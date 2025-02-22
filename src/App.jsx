import './App.css';
import IngredientList from './components/IngredientList.jsx'
import BurgerStack from './components/BurgerStack.jsx'
import { useState } from 'react';
const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {

const [stack, setStack] = useState([])

const handleAddToStack = (ingredient)=>{
  
  setStack([...stack, ingredient])
}

const handleRemoveFromStack = (ingredient)=>{
const newStackArr = stack.filter((stachIngredient)=>(
  stachIngredient.name !== ingredient.name
))
setStack(newStackArr)
}

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      <IngredientList availableIngredients={availableIngredients} handleAddToStack={handleAddToStack}/>
      <BurgerStack stack={stack} handleRemoveFromStack={handleRemoveFromStack}/>
      </section>
    </main>
  );
};

export default App;