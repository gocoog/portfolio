import React from 'react'
import projects from '../Data/ProjectData'
import ProjectPage from '../Components/ProjectPage'

export default function Projects() {
    return (
        <div className="projects">
        {projects.map(project => <ProjectPage project={project}/>)}
        </div>
    )
}