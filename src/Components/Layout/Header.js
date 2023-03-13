import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import Buffet from '../../Assets/Buffet.jfif'
import classes from '../Layout/Header.module.css'
const Header = (props) => {
return<Fragment>
     <header className={classes.header}>
        <h1> Malabar Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
    </header>
   <div className={classes['main-image']}>
    <img src={Buffet} alt="Indian Buffet"/>
   </div>
</Fragment>
    
};

export default Header;