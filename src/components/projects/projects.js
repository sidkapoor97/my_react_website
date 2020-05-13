import React from 'react';
import './projects.css'
import project_logo from './project_logo.svg'

function projects() {
  return (
    <div className="projects_app">
    <div><br /></div>
    <div className="edu_heading"><h1>Projects</h1></div>

    <ul>
      <h2 class="status">Ongoing</h2>
      <ol>
        <li className="project_item"><h3><a href="/" alt="" className="project-link">Customer Profiling and Language Detection Using Real-Time Call Center Speech Data</a></h3></li>
        <h4 className="under">December 2019 – August 2020 | Under Dr. Deepu Vijayasenan Department of Electronics and Communication, NITK</h4>
        {/* <p className="description">We aim to predict age, gender and language of a customer given an audio recording between a call center 
        agent and the customer. We do this by extracting MFCC features, VAD and then training a SVR and DNN using these features. 
        We feed First Order Statistics calculated from a GMM-UBM to the SVR/DNN Model.</p> */}
      </ol>
      <h2 class="status">Completed</h2>

      <ol>
      <li className="project_item"><h3><a href="/" alt="" className="project-link">Multi Standby Multi Sim Allocation Pattern</a></h3></li>
        <h4 className="under">May 2019 – July 2019 | Under Mr. Arun,Mr. Mohanraja and Mr. Saahityan |
        Commercial Modem Development Team, Samsung Semiconductor Institute of Research </h4>
        {/* <p className="description">The project focuses on MAC layer with respect to ﬁnding allocation pattern (created by the different scheduling algorithms) 
        for single SIM and verifying the same for multi SIM model with pause and resume scenario.</p> */}

        <li className="project_item"><h3><a href="/" alt="" className="project-link">Chest X-Ray image analysis using Deep Learning</a></h3></li>
        <h4 className="under">May 2018 – July 2018 | Under Prof Debdoot Sheet | Dept. of Electrical Engg., IIT KGP</h4>
        {/* <p className="description">Trained models using dataset of 100,000 Chest X-Ray images to identify 14 different diseases
        (labels) in a given Chest X-Ray image.</p> */}

        <li className="project_item"><h3><a href="/" alt="" className="project-link">Despeckling of OCT Images</a></h3></li>
        <h4 className="under">July 2018 – December 2018 | Under Dr.Jeny Rajan | Dept. of CSE, NITK</h4>
        {/* <p className="description">OCT images contain certain multiplicative noise. Using deep learning algorithms, in particular 
        auto-encoders, we aim to remove this noise and reconstruct the image keeping the information intact.</p> */}
      </ol>
    </ul>
        <div className="logo">
          <img src={project_logo} alt="" className="project_log_img" />
        </div>
    <ol className="projects_item">
        

        

    </ol>
    <br />
    <br />

    </div>
  );
}

export default projects;
