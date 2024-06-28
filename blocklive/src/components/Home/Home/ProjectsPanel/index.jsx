import './style.css'

export function ProjectPanel({ projects, title }) {
    return <ItemPanel title={title} items={
        projects.map(project => (<Project
            title={project.title}
            authors={project.authors}
            imageUrl={project.thumbnail}
            projectUrl={project.projectUrl} // todo auto generate based on id
        ></Project>))
    }></ItemPanel>
}

export function GroupPanel({ groups, title }) {
    return <ItemPanel title={title} items={
        groups.map(project => (<Group
            title={project.title}
            imageUrl={project.thumbnail}
            projectUrl={project.projectUrl} // todo auto generate based on id
        ></Group>))
    }></ItemPanel>
}

export function ItemPanel({ items, title }) {
    return <div class="projectsPanelWrapper2">
        <span class="ppTitle">{title}</span>
         <div class="projectsPanelWrapper">
            <div class="scrollButton left" onClick={e=>scrollOnClick(e,false)}>‹</div>
            <div class="projectsPanel">
                {items}
            </div>
            <div class="scrollButton" onClick={e=>scrollOnClick(e,true)}>›</div>

        </div>
    </div>
}

export function Panel({ body, title, titleStyle, bodyStyle }) {
    return <div class="projectsPanelWrapper2" style={bodyStyle}>
    <span class="ppTitle" style={titleStyle}>{title}</span>
     <div class="projectsPanelWrapper">
            {body}
    </div>
</div>
}

function scrollOnClick(event,isLeft) {
    let panel = event.currentTarget.parentNode.querySelector('.projectsPanel');
    console.log(panel)
    window.pan=panel;
    panel.scrollTo({left:isLeft?panel.scrollLeft+300:panel.scrollLeft-300,top:panel.scrollTop,behavior:'smooth'});
}

export function Project({ title, authors, imageUrl, projectUrl }) {
    return  <a href={projectUrl}><div class="projectStack">
        <img class="thumbnail" src={imageUrl}></img>
       <span class="projectTitle">{title}</span>
        <span class="authors">{
            authors?.map(username => {
                <div class="author">{username}</div>
            })
        }</span>
    </div></a>
}  

export function Group({ title, imageUrl, projectUrl }) {
    return <div class="projectStack">
        <img class="thumbnail group" src={imageUrl}></img>
        <a href={projectUrl}><span class="projectTitle">{title}</span></a>
    </div>
}  