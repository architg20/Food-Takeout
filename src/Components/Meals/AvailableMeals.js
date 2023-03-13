import Card from '../UI/Card';
import MealItem from './MealItem/Mealitem';
import classes from './AvailableMeals.module.css';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Roti-Curry',
      description: 'Spicy blend of curry and bread ',
      price: 575,
    },
    {
      id: 'm2',
      name: 'Hyderabadi Biryani',
      description: 'A german specialty!',
      price: 700,
    },
    {
      id: 'm3',
      name: 'Rasgulla',
      description: 'Bengali Special',
      price: 150,
    },
    {
      id: 'm4',
      name: 'Aloo Parotha',
      description: 'Punjabi Special',
      price: 450,
    },
  ];


const AvailableMeals = () => { 
  const mealsList = DUMMY_MEALS.map((meal) =>( 
  <MealItem 
  key={meal.id} 
  id={meal.id}
  name={meal.name} 
  description={meal.description} 
  price={meal.price}/>));  
 
    return <section className={classes.meals}>
       <Card>
        <ul>
            {mealsList}
        </ul>
       </Card>
    </section>



};


export default AvailableMeals;