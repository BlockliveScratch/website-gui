import './script.css'
import glass from "../../../../img/glass.png" 

export function SearchBar({style}) {
    return <div class="searchbar" style={style}>
        <img class="glass" src={glass}></img>
        <input type="text" class="searchText" contentEditable={true}></input>
    </div>
}