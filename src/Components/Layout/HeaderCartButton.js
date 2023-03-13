import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/Carticon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
const HeaderCartButton = (props) => {
 const[btnisHiglighted, setBtnIsHighLighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
const numberOFCartItems= items.reduce((curNumber, item) => {
  return curNumber+item.amount;
}, 0);


  const btnClasses = `${classes.button} ${btnisHiglighted ?    classes.bump : ''}`; 
  
  useEffect(() => {
   if(cartCtx.items.length ===0){
    return;
   }
    setBtnIsHighLighted(true);

    const timer =setTimeout(() => {
     setBtnIsHighLighted(false);  
    },300);
  return () => {
         clearTimeout(timer);
  };
  }, [items]);

  return (<button className={btnClasses} onClick={props.onClick}>
  <span className={classes.icon}>
  <CartIcon />
  </span>
<span>Your Cart</span>
<span className={classes.badge}>{numberOFCartItems}</span>


</button>
  );
};

export default HeaderCartButton;