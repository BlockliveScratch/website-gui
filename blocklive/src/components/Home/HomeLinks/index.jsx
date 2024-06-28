import './style.css'
import honklogo from '../../../img/HonkLogo.png'
import { NavLink } from 'react-router-dom'
import HeadBarNavLink from './HeadBarNavLink'

export default function HomeLinks() {
    return <div class="homelinks">
        {/* <div class="headbarbutton">Home</div> */}
        <HeadBarNavLink to="mystudios">My Projects</HeadBarNavLink>
        <HeadBarNavLink to="posts">My Groups</HeadBarNavLink>
        <HeadBarNavLink to="newproject">Open Collabs</HeadBarNavLink>
        {/* <HeadBarNavLink to="mystuff">Jams</HeadBarNavLink> */}

    </div>
}