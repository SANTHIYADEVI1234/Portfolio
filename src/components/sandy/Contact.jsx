import React from 'react';
import Navbar from '../Navbar';

const Contact = (pro) => {
  return (
    <div>
         <Navbar value="CONTACT" darkTheme={pro.darkTheme} setDarkTheme={pro.setDarkTheme}/>
       <div className="container my-5">
      <h2 className="text-center mb-4 text-primary">Contact Me</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* <div className="card text-center shadow p-3"> */}
          <div className="card text-center contact-shadow-box">
            <div className='contact1'>
           <img src="sandy2.png" alt="santhiya"/>
</div>
            <div className="card-body">
              <h5 className="card-title">Santhiyadevi K</h5>

                <ul className="contact2">
                <li><strong>📧:</strong> santhiyadevi1827@gmail.com</li>
                <li><strong>📞:</strong> +91 9790165570</li>
                <li><strong>📍:</strong> Coimbatore, Tamil Nadu, India</li>
                <li><strong>🐙:</strong> <a href="https://github.com/SANTHIYADEVI1234" target="_blank" rel="noreferrer">github.com</a></li>
                <li><strong>🔗:</strong> <a href="www.linkedin.com/in/santhiyadevi-kanagavel" target="_blank">LinkedIN.com</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;

