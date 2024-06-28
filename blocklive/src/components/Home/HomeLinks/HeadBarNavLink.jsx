import { NavLink } from "react-router-dom"
import './style.css'

export default function HeadBarNavLink({to,children}) {
    return <NavLink to={to} className='homelinkbutton'
        style={
           {}
        }
    ><div className="homelinkbutton">{children}</div>
    </NavLink>
}