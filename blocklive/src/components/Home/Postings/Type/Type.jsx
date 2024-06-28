import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { setType } from './TypeSelector'

const Type=({typeName})=>{
    let dispatch=useDispatch()
    let selectedType = useSelector(state=>(state.postType.selected))
    return <div onClick={()=>{dispatch(setType({type:typeName}))}} className={typeName==selectedType?'type selectedType':'type'}>{typeName+'s'}</div>
}
export default Type;