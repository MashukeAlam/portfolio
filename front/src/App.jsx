import { useState } from 'react'
import { AiFillLinkedin, AiFillYoutube, AiFillFacebook, AiFillGithub } from 'react-icons/ai';
import Image from './Image';


function App() {

  return (
    <>
      <main>
        <section className='min-h-screen'>
          <nav className='flex flex-row justify-between m-2 p-5'>
            <h1>Dev Jim</h1>
            <ul className='flex flex-row justify-evenly px-4 mx-4'>
              <li>Resume</li>
              <li></li>
            </ul>
          </nav>
          <div className="intro text-center p-10">
            <h1 className='text-5xl py-5 text-teal-500 font-bold hover:text-teal-700'>Mashuke Alam Jim</h1>
            <h2 className='text-2xl py-5'>CS Grad | Developer | Software Enthusiast</h2>
            <h3 className='text-1 py-5 text-gray-500 leading-8'>Always wanted to create world class software which provide service to the hands of people for good. Haven't started my career fully yet. But here's to a journey to the top of the world!</h3>
          </div>
          <div className="links text-4xl flex flex-row justify-center gap-5 text-neutral-700">
            <a href='https://www.facebook.com/mashuk.jim99/'><AiFillFacebook /></a>
            <a href='https://github.com/MashukeAlam'><AiFillGithub /></a>
            <a href='https://www.linkedin.com/in/mashukjim/'><AiFillLinkedin /></a>
            <a href='https://www.youtube.com/@mashukjim6722'><AiFillYoutube /></a>
          </div>
          <div className='flex flex-row justify-center my-10 rounded-full'>
            <Image name={"./cover.jpg"}></Image>
          </div>
          <div className='m-5 p-5 text-center flex flex-col'>
            <h1 className='my-5'>For services contact me at the following links:</h1>
            <div>
              <a className='btn-link' href="https://www.fiverr.com/alamjim?up_rollout=true">Fiverr</a>
              <a className='btn-link' href="https://www.peopleperhour.com/freelancer/mashuke_alam-jim-nodejs-full-stack-web-developer-nvwmmay">PeoplePerHour</a>

            </div>
          </div>
        </section>

      </main>

    </>
  )
}

export default App
