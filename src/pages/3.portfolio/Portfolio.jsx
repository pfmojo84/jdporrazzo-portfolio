import React from 'react';
import ProjectCard from './ProjectCard';
import meepImage from '../../assets/MEEP_screenshot_2024.png';
import relocareImage from '../../assets/relocare_screenshot_2024.png';
import weatherAppImage from '../../assets/weatherapp_screenshot_2024.png';
import dailyPlannerImage from '../../assets/dailyplanner_screenshot_2023.png';
import jsQuizImage from '../../assets/jsquiz_screenshot_2024.png';
import jobCredImage from '../../assets/JobCred_screenshot.png';

function Portfolio() {

   // Array of project objects with details about each project
  const projects = [
    {
      name: "JobCred",
      description: "MERN Application for Job Seekers and Employers",
      image: jobCredImage,
      github: "https://github.com/TimL94/Job-Cred",
      liveUrl: "https://job-cred.onrender.com/"
    },
    {
      name: "Meep",
      description: "eCommerce Webpage using HTML, CSS, and JS",
      image: meepImage,
      github: "https://github.com/pfmojo84/meep-meep",
      liveUrl: "https://pfmojo84.github.io/meep-meep/"
    },
    {
      name: "Relocare",
      description: "Community resource application for asylum seekers (CRUD App using MySQL)",
      image: relocareImage,
      github: "https://github.com/pfmojo84/ReloCareWebApp",
      liveUrl: "https://peaceful-taiga-71924-fa15f58117fe.herokuapp.com/login"
    },
    {
      name: "Five Day Forecast",
      description: "Weather app using JS and OpenWeather API",
      image: weatherAppImage,
      github: "https://github.com/pfmojo84/five-day-forecast",
      liveUrl: "https://pfmojo84.github.io/five-day-forecast/"
    },
    {
      name: "Daily Planner",
      description: "Cross items off your to-do list with this functional daily planner app!",
      image: dailyPlannerImage,
      github: "https://github.com/pfmojo84/daily-schedule-app",
      liveUrl: "https://pfmojo84.github.io/daily-schedule-app/"
    },
    {
      name: "Javascript Quiz App",
      description: "Test your JS knowledge and save your high score!",
      image: jsQuizImage,
      github: "https://github.com/pfmojo84/fun-in-fundamentals-js",
      liveUrl: "https://pfmojo84.github.io/fun-in-fundamentals-js/index.html"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean to-sunset flex flex-col items-center justify-center font-funky">
      <header className="w-full py-6">
        <h1 className="text-5xl text-black text-center">My Work</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-2xl">
        <p className="text-2xl text-black pt-4">Here are some of my recent projects:</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 w-full px-4">
          {/* Iterate over the projects array to display each project */}
          {projects.map(item => {
              return (
                <ProjectCard 
                name={item.name} 
                description={item.description}
                image= {item.image}
                github={item.github}
                liveUrl={item.liveUrl}
                />
              )
            })
          }
        </ul>
      </main>
    </div>
  );
}

export default Portfolio;
