import React from 'react'

const ProjectCard = (props) => {
  return (

    <li className="py-4 flex flex-col items-center">
      <img className="h-[25vh] w-[35vh]" src={props.image} alt="" />
      <div className="ml-3 text-center">
        <h2 className='text-3xl font-bold font-fun'>{props.name}</h2>
        <p className="text-lg font-medium text-gray-900 font-fun">{props.description}</p>
        <a href={props.github} className="text-1xl text-blue-700 hover:text-red-700 block font-fun">GitHub Repo</a>
        <a href={props.liveUrl} className="text-1xl text-blue-700 hover:text-red-700 block font-fun">Go To App</a>
      </div>
    </li>
   
  )
}

export default ProjectCard