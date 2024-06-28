import { NavLink } from "react-router-dom"
import './style.css'

export default function HeadBarNavLink({to,children}) {
    return <NavLink to={to} className='headbarbutton'
        // style={
        //     (state)=>state.isActive?{borderBottom:"solid blue 5px"}:{}
        // }
    >{children}
    </NavLink>
}