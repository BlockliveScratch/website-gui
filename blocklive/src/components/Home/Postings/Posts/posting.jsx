import NeedsTag from './Tags/needsTag';
import './posting.css'

export default function Posting({title,by,needs}) {

    return <div className="posting">
        <needs>
            <needsText>needs:</needsText>
            {getNeedsTags(needs)}
        </needs>

        <div class="titleandby">
        <titleInfo>
            <projectType>game</projectType>
            <projectTitle>{title}</projectTitle>
        </titleInfo>
        <by>by {by}</by>
        </div>

       
        <pictures>
                <picture></picture>  
        </pictures>
    </div>
}

function getNeedsTags(needs) {
    return needs.map(need=>NeedsTag({need}))
}