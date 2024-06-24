import React from 'react';
import Photo from '../../assets/newpic.jpg'
import Avatar from '../../assets/avatar.png';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean to-sunset flex flex-col items-center justify-center font-funky">
        {/* Header section */}
      <header className="w-full pt-8 mb-8">
        <h1 className="text-5xl text-black text-center">Welcome to My Far Out Journey To <br/> the Outer Limits of the Interwebs</h1>
      </header>
        {/* Main content section */}
      <main className="flex-grow flex flex-col items-center justify-center">
      <div className="relative w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mb-16">
          <img
            src={Photo}
            alt="Photo"
            className="absolute w-full h-full rounded-full border-8 border-sand shadow-lg transition-opacity duration-300 hover:opacity-0"
          />
          <img
            src={Avatar}
            alt="Avatar"
            className="absolute w-full h-full rounded-full border-8 border-sand shadow-lg opacity-0 transition-opacity duration-300 hover:opacity-100"
          />
        </div>
         {/* Introduction and About Me section */}
        <p className="text-5xl text-black text-center">Hi! I'm John Porrazzo, an aspiring web developer sailing towards <span className='text-blue-700 hover:text-red-700'> divs </span> unknown</p>
        <p className="text-4xl text-black mt-4 text-center">Welcome to my portfolio website! <br/> I built it with React, Vite, Tailwind CSS, and <span className='text-blue-700 hover:text-red-700'>lots of love</span></p>
        <p className="text-4xl mt-12 text-center font-fun font-bold">About Me: </p>
        <p className="text-2xl text-center font-fun m-4">I am a recent graduate of a Full Stack Web Development program in which I gained experience using languages and systems such as HTML, CSS, Tailwind, Bootstrap, JavaScript, Node.js, Express, React, MySQL, MongoDB, Github, Mongoose, Sequelize, and GraphQL
        </p>
       
      </main>
    </div>
  );
}

export default Home;
