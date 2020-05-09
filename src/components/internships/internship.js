import React from 'react';
import './internship.css'

import samsung_research from './logo-sr.png'
import iit_logo from './iit_logo.png'
import wwf_logo from './WWF_logo.png'
import changepay from './logo_changepay.jpg'
import intern_logo from './intern_logo.svg'

function internships() {
  return (
    <div className="projects_app">
    <div><br /></div>
    <div className="edu_heading"><h1>Internships</h1></div>
    <br />
    <ul className="intern_list">
        <li className="samsung"><span className="title">Assistant Systems Intern</span>
        <br /> 12th May 2019 – 12th July 2019 <br />
        Samsung Semiconducor Institute of Research, Bangalore  </li>
        <img src={samsung_research} alt="" className="samsung-logo" />
        <br/>

        <li className="iit"><span className="title">Research Intern</span>
        <br />May 2018 – July 2018
        <br />Real Time Signal Processing Lab, IIT Kharagpur </li>
        <a href="https://www.researchgate.net/publication/337856759_Jointly_Learning_Convolutional_Representations_to_Compress_Radiological_Images_and_Classify_Thoracic_Diseases_in_the_Compressed_Domain" className="paper-link" alt="">
        Jointly Learning Convolutional Representations to Compress
        <br /> Radiological Images and Classify Thoracic Diseases in the
        <br /> Compressed Domain
        <br/>
        <br/>
        </a>
        <img src={iit_logo} alt="" className="iit-logo" />
        
        <li className="wwf"><span className="title">Data Intern</span><br />
        December 2018<br />
        World Wide Fund, Delhi</li>
        <img src={wwf_logo} alt="" className="wwf-logo"/>
        <br/>

        <li className="changepay"><span className="title">Marketing Intern</span>
        <br />Jan 2017 - April 2017<br/>
        Changepay MMS Technologies</li>
        <img src={changepay} alt="" className="changepay-logo" />
    </ul>
    <img src={intern_logo} alt="" className="intern-logo" />
    <br />
    <br />

    </div>
  );
}

export default internships;
