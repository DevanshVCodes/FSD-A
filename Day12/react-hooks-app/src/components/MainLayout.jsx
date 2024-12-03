import React from 'react'
import {Link,Outlet} from 'react-router-dom'
const MainLayout = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/counter">Counter App</Link>
                </li>
                <li>
                    <Link to="/image">Image App</Link>
                </li>
            </ul>
        </nav>
    </div>
    
  )
}

export default MainLayout