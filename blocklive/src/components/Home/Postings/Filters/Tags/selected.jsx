import { FILTERS } from '../filter'
import './tags.css'
import X from './X/x';
import Color from 'color'

const lightness = 0.0;
const fade = 0.3;

export default function SelectedTag({keyy,name}) {
    let color=Color(FILTERS[keyy].options[name]).lighten(lightness).fade(fade).string();
    return (
        <tag style={{borderWidth:'3px',paddingRight:'2px',color:Color(color).isLight()?'black':'white',backgroundColor:color}}>
            {name}
            <X keyy={keyy} name={name}/>
        </tag>
    )
}