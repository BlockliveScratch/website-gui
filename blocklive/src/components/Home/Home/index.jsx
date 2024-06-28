import HomeLinks from "../HomeLinks";
import ActivitiesList from "./ActivityList";
import { GroupPanel, ProjectPanel } from "./ProjectsPanel";
import './style.css'

export default function Home() {
    return <div class="home">
        {/* <HomeLinks></HomeLinks> */}
        <div class="activities">
            <ActivitiesList title={"Project Updates"} items={[{ title: '2 edits in Whomping Willow' }, { title: 'hey' }]}></ActivitiesList>
            <ActivitiesList title={"Friend Activity"} items={[{ title: 'hey' }, { title: 'hey' }, { title: 'hey' }]}></ActivitiesList>
        </div>
        <ProjectPanel title={'Popular Projects'} projects={
            [
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
            ]
        }></ProjectPanel>

        <GroupPanel title={'Popular Crews'} groups={
            [
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
            ]
        }></GroupPanel>


        <ProjectPanel title={'Recently Shared Projects'} projects={
            [
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
            ]
        }></ProjectPanel>

        <ProjectPanel title={'Collabs Looking For Help'} projects={
            [
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
                { title: "Test project", authors: ['ilhp10', 'rgantzos'], thumbnail: 'https://www.snexplores.org/wp-content/uploads/2020/04/1030_LL_trees.png', projectUrl: 'https://scratch.mit.edu/projects/234324544' },
            ]
        }></ProjectPanel>
    </div>
}