import { useDispatch } from 'react-redux';
import { FILTERS, enableFilter } from '../filter'
import './tags.css'
import Color from 'color'

const lightness = 0.4;
const desaturation = 0.0;
const fade=0.9;

export default function UnselectedTag({ keyy, name }) {

    const dispatch = useDispatch();

    return (
        <tag 
            className="unselected"
            onClick={() => dispatch(enableFilter({ keyy, name }))}
            style={{cursor:'pointer',marginTop:'1px',marginBottom:'1px',backgroundColor:Color(FILTERS[keyy].options[name]).lighten(lightness).desaturate(desaturation).fade(fade).string()}}
        >
            {name}
        </tag>
    )
}