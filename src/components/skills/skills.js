import React from 'react';
import './skills.css'
import istelogo from './istelogo.png'
import ecell from './ecell_logo.jpg'
import svco from './svco.svg'
import space from './under25_logo.png'

function skills() {
  return (
    <div className="skills_app">
    <div><br /></div>
    <div className="skill_heading"><h1>Co-Curricular</h1></div>

    <ul className="list_skills">
      <li className="list_item">Joint Convenor, Indian Society for Technical Education NITK
      <br />August 2019 - Till Date</li>
      <img src={istelogo} alt="" className="iste-logo" />

      <li className="list_item">President, Entrpreneurship-Cell NITK<br />
      August 2019 - Till Date</li>
      <div className="cell"><img src={ecell} alt="" className="ecell-logo" /></div>

      <li className="list_item">AR Open Program by Facebook and School Of Innovation <br />
      May 2020 - Ongoing</li>
      <div className="svco"><img src={svco} alt="" className="svco-logo"/></div>

      <li className="list_item">Space Warrior, Under 25<br />
      August 2019 - May 2020</li>
      <div className="space"><img src={space} alt="" className="space-logo"/></div>
    <div className="items_up">
      <li className="list_item">Contributions towards Open Source - GNU Radio, DIPY</li>

      <li className="list_item">Volunatory Work - Mentor, Avanti Fellows
      <br />May 2016 - March 2017</li>

      <li className="list_item">Languages Known - Python, Javascript, HTML, CSS</li>
      <li className="list_item">Frameworks - Bootstrap, React.js</li>

    </div>
    </ul>


    </div>
  );
}

export default skills;
