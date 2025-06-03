import React from 'react';
import Navbar from '../Navbar';

const Project = (pro) => {
  return (
    <div>
         <Navbar value="Project" darkTheme={pro.darkTheme} setDarkTheme={pro.setDarkTheme}/>
 <div className="container mt-4">
  <div className="row">
    <div className="col-sm-4 mb-3">
      <div className="card">
        <img src="BB.png" class="card-img-top" alt="Image 1"/>
        <div className="card-body">
          <h5 classNameName="card-title">Biriyani Brothers</h5>
          <p className="card-text">Made using <b>HTML, CSS,</b> and <b>Bootstrap</b> for a clean and responsive design.</p>
        <div className="d-flex gap-5">
  <a href="https://santhiyadevi1234.github.io/Biriyani-Brothers/" className="btn btn-primary">Live Demo</a>
  <a href="https://github.com/santhiyadevi1234/Biriyani-Brothers" className="btn btn-primary ms-auto">View Code</a>
</div>
        </div>
      </div>
    </div>

    <div className="col-sm-4 mb-3">
     <div className="card">
        <img src="Student Registration Form.png" class="card-img-top" alt="Image 2"/>
        <div className="card-body">
          <h5 className="card-title">Student Registration Form</h5>
          <p className="card-text">Crafted with precision using <b>HTML, CSS,</b> and <b>Javascript</b> to simplify student registration.</p>
          <div className="d-flex gap-5">
          <a href="https://santhiyadevi1234.github.io/Student-Registration-Form/" className="btn btn-primary">Live Demo</a>
          <a href="https://github.com/santhiyadevi1234/Student-Registration-Form" className="btn btn-primary ms-auto">View Code</a>
</div>
          </div>
        </div>
    </div>


    <div className="col-sm-4 mb-3">       
      <div className="card">
        <img src="waffles shop.png" class="card-img-top" alt="Image 3"/>
        <div className="card-body">
          <h5 className="card-title">Waffle Shop</h5>
          <p className="card-text">I made a Waffle Shop website using <b>HTML, CSS, Bootstrap,</b> and <b>JavaScript</b></p>
          <div className="d-flex gap-5">
          <a href="https://santhiyadevi1234.github.io/Waffle-Shop/" className="btn btn-primary">Live Demo</a>
           <a href="https://github.com/santhiyadevi1234/Waffle-Shop" className="btn btn-primary ms-auto">View Code</a>
           </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>


  );
};

export default Project;
