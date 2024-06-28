import './style.css'

export function MyStudiosPage() {
    return <div class="myStudios">
        <span class='title'>My Crews</span>
        <div class='visualContainer myStudios'>
        <div class="createNewButton">+ Create a New Crew</div>
        <CrewDock
            name={'Nintendo'}
            icon={'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/10/nintendo-company.jpg'}
            banner={'https://connect-assets.prosple.com/cdn/ff/DBVnJ5bSqIKgsCpYW0CSgrwnfwJ1Ho9zfikhTivd2Vs/1656955374/public/styles/scale_and_crop_center_890x320/public/2022-07/banner-nintendo-1786x642-2022.jpg?itok=LLuYS8cL'}
            owners={['bigman']}
            members={['absdds', 'mister dude']}
            projectCount={5}
        >

        </CrewDock>
        <CrewDock
            name={'Unnamed Crew'}
            icon={'https://yt3.googleusercontent.com/ytc/AIdro_kECsRD-CffXuBZyiBFW6eTnfhnvc3Rkmw9EwXWH9TSUw=s900-c-k-c0x00ffffff-no-rj'}
            banner={'https://preview.redd.it/yxybzzya1fh51.png?width=640&crop=smart&auto=webp&s=94f48862bdfa9f7b4873ceb1bc16b81437c4e628'}
            owners={['rgantzos']}
            members={[]}
            projectCount={5}
        ></CrewDock>

        <CrewDock
            name={'Unnamed Crew'}
            icon={'https://yt3.googleusercontent.com/ytc/AIdro_kECsRD-CffXuBZyiBFW6eTnfhnvc3Rkmw9EwXWH9TSUw=s900-c-k-c0x00ffffff-no-rj'}
            banner={'https://preview.redd.it/yxybzzya1fh51.png?width=640&crop=smart&auto=webp&s=94f48862bdfa9f7b4873ceb1bc16b81437c4e628'}
            owners={['rgantzos']}
            members={[]}
            projectCount={5}
        ></CrewDock>

<CrewDock
            name={'Unnamed Crew'}
            icon={'https://yt3.googleusercontent.com/ytc/AIdro_kECsRD-CffXuBZyiBFW6eTnfhnvc3Rkmw9EwXWH9TSUw=s900-c-k-c0x00ffffff-no-rj'}
            banner={'https://preview.redd.it/yxybzzya1fh51.png?width=640&crop=smart&auto=webp&s=94f48862bdfa9f7b4873ceb1bc16b81437c4e628'}
            owners={['rgantzos']}
            members={[]}
            projectCount={5}
        ></CrewDock>

    </div>
    </div>
}

export function CrewDock({ name, icon, banner, members, owners, projectCount }) {
    return <div class="crewButton" style={{ backgroundImage: `url(${banner})` }}>
        <div class="crewContainer">
            <div class="containerCrew1">
                <img class="crewIcon" src={icon}></img>
                <div class="containerCrew2">
                    <div class="crewName">{name}</div>
                    <div class="crewInfo">
                        <div class="crewMembers">{owners.length} {owners.length == 1 ? 'owner' : 'owners'}{owners.length==0?'':':'} {owners.map(owner => (<span><a href={`https://sdfsdf/sdfs/${owner}`}>{owner}</a>, </span>))}</div>
                        <div class="crewMembers">{members.length} {members.length == 1 ? 'member' : 'members'}{members.length==0?'':':'} {members.map(owner => (<span><a href={`https://sdfsdf/sdfs/${owner}`}>{owner}</a>, </span>))}</div>
                        <div>{projectCount} projects</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
}