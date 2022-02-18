import React from 'react'
import {Link} from 'react-router-dom';
export default function Navbar() {
  return (
    
   
   <nav>
   <div className="nav-wrapper blue">
     <a to="/" className="brand-logo">Todo</a>
     <ul id="nav-mobile" className="right">
       <li><Link to="Login">Login</Link></li>
       <li><Link to="SignUp">Components</Link></li>
       <li>
       <button className='btn red'>LogOut</button>
       </li>
     </ul>
   </div>
 </nav>
  

  )
}
