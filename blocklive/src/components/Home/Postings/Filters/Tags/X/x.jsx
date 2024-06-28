import { useDispatch } from 'react-redux'
import './x.css'
import { disableFilter } from '../../filter'

export default function X({keyy,name}) {

    let dispatch = useDispatch()

    return (
        <x onClick={()=>dispatch(disableFilter({keyy,name}))}>
            +
        </x>
    )
}