import './style.css'
import honklogo from '../../../img/HonkLogo.png'
import groups from '../../../img/groups.png'
import projects from '../../../img/projects.png'
import { NavLink } from 'react-router-dom'
import HeadBarNavLink from './HeadBarNavLink'
import { SearchBar } from './SearchBar'
import { Username } from './Username'

export default function HeadBar() {
    return <div class="headbarBanner">
        <div class="headbar">
            <a href="/"><img src={honklogo} class="honklogo" ></img></a>
            {/* <div class="headbarbutton">Home</div> */}
            <SearchBar style={{marginRight:"5px"}}></SearchBar>

            <HeadBarNavLink to="editor">New Project</HeadBarNavLink>
            <HeadBarNavLink to="newproject">Explore</HeadBarNavLink>
            <HeadBarNavLink to="posts">Donate</HeadBarNavLink>
            <HeadBarNavLink to="mystuff">Jams</HeadBarNavLink>
            <HeadBarNavLink to="mystuff"><img src={projects}></img></HeadBarNavLink>
            <HeadBarNavLink to="mygroups"><img src={groups}></img></HeadBarNavLink>
            <Username username={'MegaCouch'} picUrl={'https://cdn2.scratch.mit.edu/get_image/user/5097744_60x60.png'}></Username>
        </div>
    </div>
}
