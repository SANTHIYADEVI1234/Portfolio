
import React from 'react';
import Navbar from '../Navbar';


const Home = (pro) => {
  return (
    <div>
      <Navbar value="Home" darkTheme={pro.darkTheme} setDarkTheme={pro.setDarkTheme} />

      <div className="container-fluid">
        <div className="row align-items-center">
          
          <div className="col-md-6">
            <div className='home1'>
            <h1><b>Hello, I'm <span>Santhiyadevi K</span></b></h1>
            <p>
              A passionate web developer focused on creating clean, responsive, and user-friendly websites.
            </p>
            </div>
            <p className="home2">
            Turning ideas into real-world digital experiences.
          </p>
          </div>

          <div className="col-md-6 text-center">
            <div className='home3'>
              <img src="sandy1.png" alt="Santhiyadevi"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

