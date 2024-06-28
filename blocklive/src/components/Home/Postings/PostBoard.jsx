import Filter from "./Filters/filter"
import SearchBar from "./SearchBar/searchBar"
import TypeSelector from "./Type/TypeSelector"
import Posting from "./Posts/posting"
import './posts.css'

export default function PostBoard() {
    return (
        <postBoard>
            <filters>
                <Filter keyy={"skill"}>hiiii</Filter>
                <Filter keyy={"type"}></Filter>
                <SearchBar></SearchBar>
                {/* <TypeSelector></TypeSelector> */}
            </filters>

            <posts>
                <Posting title="test project" by="ilhp10" needs={['animation']}></Posting>
            </posts>

        </postBoard>
    )
}