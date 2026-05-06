import React from 'react'

const Projects = (props) => {
  return (
    <div className='projects'>
      <div className='project-name'>{props.project_name}</div>
      <div className="description">{props.body}</div>
      <a className='live-view' href={props.path}>View</a>
    </div>
  )
}

export default Projects