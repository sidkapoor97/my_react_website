import React from 'react';
import './education.css'
import edu_woman from './woman-sitting-laptop.svg'
import router from './router.svg'
import server from './server.svg'
import hard_drive from './hard-drive.svg'


function education() {
  return (
    <div className="education_app">
        <div className="hard_drive_class">
        <img src={hard_drive} alt="" className="img_hard_drive"/>
    </div>
    <div><br /></div>
    <div className="edu_heading"><h1>Education</h1></div>
    <div className="edu_list">
        <ol className="edu_list_ul">
            <li className="college">National Institute Of Technology Karnataka
            <ul>
                <li>AIR in JEE Mains: 2141</li>
                <li>CGPA : 8.53 (till 7th semester)</li>
                <li>Course Undertaken: 
                    <ol>
                        <li className="courses">Digital Signal Processing</li>
                        <li className="courses">Linear Signals and Systems</li>
                        <li className="courses">Image Processing and Computer Vision</li>
                        <li className="courses">Staitstical Analysis</li>
                        <li className="courses">Computing Imaging and Physics</li>
                        <li className="courses">Matrix theory and Probability</li>
                        <li className="courses">Data Structure and Algorithms</li>
                    </ol>
                </li>
            </ul>
            </li>
            <li className="twelve">Delhi Public School, Dwarka
            <ul>
                <li>96.2% in CBSE Board Examinations</li>
            </ul>
            </li>
            <li className="school">Sunbeam School Varuna
            <ul>
                <li>CGPA of 10.00 in High School</li>
            </ul>
            </li>
        </ol>
        <br />
        <div className="woman_sitting">
        <img src={edu_woman} alt="" className="img_woman"/>
    </div>
    <div className="router">
        <img src={router} alt="" className="img_router"/>
    </div>
    </div>
    

    </div>
  );
}

export default education;
