import { Panel } from '../ProjectsPanel'
import './style.css'

// export default function ActivitiesList({title,items}) {
//     return <div class="activitiesList">
//         <div class="activitiesTitle">
//             {title}
//         </div>
//         <div class="activitiesItems">
//             {items?.map(item=><ActivitiesItem title={item.title} desc={item.desc}></ActivitiesItem>)}
//         </div>
//     </div>
// }

export default function ActivitiesList({title,items}) {
    return <Panel titleStyle={{justifyContent:'center',paddingLeft:'unset',background:'var(--activityHeaderBackground)'}} bodyStyle={{background:'var(--activityBackground)'}} title={title} body={

    <div class="activitiesItems">
        {items?.map(item=><ActivitiesItem title={item.title} desc={item.desc}></ActivitiesItem>)}
    </div>}>


    </Panel>
    
    
  
}

export function ActivitiesItem({title,desc,pic}) {
    return <div class="activitiesItem">
        {title}

    </div>
}