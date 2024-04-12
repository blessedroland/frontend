import React, { useState, useContext } from 'react'
import './Navbar.css'
import cart from '../Assets/cart.png'
import { Link } from 'react-router-dom'
import foodLogo from '../Assets/foodLogo.png'
import { Restauto } from '../../Context/Restauto';

export const Navbar = () => {
    const [menu,setMenu] = useState("home")
    const {addToBadge} = useContext(Restauto)
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={foodLogo} alt="" />
            <p>EA LIBRARIES</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==='home'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("customers")}}><Link style={{textDecoration:'none'}} to='/customers'>Library</Link>{menu==='customers'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("staff")}}><Link style={{textDecoration:'none'}} to='/staff_login'>Signin</Link>{menu==='staff'?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button onClick={()=>{setMenu("staff")}}>Admin</button></Link>
            <Link to='cart'><img src={cart} alt="" onClick={()=>{setMenu("customers")}}/></Link>
            <div className="nav-cart-count">{addToBadge()}</div>
        </div>
    </div>
  )
}
