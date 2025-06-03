import React from 'react';
import Navbar from '../Navbar';

const About = (pro) => {
  return (
    <div>
      <Navbar value="Aboutme" darkTheme={pro.darkTheme} setDarkTheme={pro.setDarkTheme} />
    <div className="container my-5">
      <div className="row align-items-center">       
        <div className="col-md-6 mb-4 mb-md-0">
          <div className='about1'>
            
          <p>
            I am a dedicated and detail-oriented developer passionate about creating
            efficient and beautiful web applications. With a solid foundation in
            frontend and backend technologies, I enjoy turning ideas into seamless user
            experiences.
          </p>
          <p>
            <strong>Skills:</strong><br />
            🔹 HTML, CSS, JavaScript, Bootstrap, React<br />
            🔹 Node.js, Express.js, MongoDB<br />
          </p>
          <p>
            I'm passionate about continuous learning and applying my skills to build useful and impactful web apps.
          </p>
        </div>
        </div>

         <div className="col-md-6 text-center">
            <div className='about2'>
              <img src="about.png" alt="laptop" id='abouts2'/>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default About;


