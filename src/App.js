import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import myPhoto from './components/homepage_icons/rsz_about-1.jpg'
import git from './components/homepage_icons/logo-github.jpg'
import linked_in from './components/homepage_icons/logo-linkedin.jpg'
import free_code from './components/homepage_icons/free_code_camp.png'
import mail from './components/homepage_icons/mail-sharp.png'

// import Hobby from './components/hobbies/hobby'
import Education from './components/education/education'
import Project from './components/projects/projects'
import Skills from './components/skills/skills'
import Internship from './components/internships/internship'

function App() {
  return (
    <div className="App">
      <section classname="Homepage">
          <Navbar />
          <div className="content">
      <div className="myPhoto"><img src={myPhoto} alt="" className="my_pic"/></div>
    
    <div className="intro-heading"><h1>Who Am I?</h1></div>
    <div className="introduction"><p>Senior Undergrad at National Institute Of Technology Karnataka
    pursing Electronics and Communication with interests in Signal
    Processing, Deep Learning and Web Development.</p></div>

    <div className="doing-heading"><h1>What do I do?</h1></div>
    <div className="doing"><p>An avid reader, coder and technology enthusiast who
    dabbles in a lot of things. Whether it's a debate on
    political philosophy or a crazy DIY Project, I am always
    available. </p></div>

    <div className="connect">
      <a href="https://github.com/sidkapoor97" target="_blank" alt="" rel="noopener noreferrer"><img src={git} alt= "" className="github-icon"/></a>
      <a href="https://www.linkedin.com/in/siddharth-kapoor97/" target="_blank" rel="noopener noreferrer"><img src={linked_in} alt= "" className="linkedin-icon"/></a>
      <a href="https://www.freecodecamp.org/badguy97" target="_blank" rel="noopener noreferrer"><img src={free_code} alt= "" className="free-code-camp-icon"/></a>
      <a href="mailto:siddharthakapoor2@gmail.com" target="_blank" rel="noopener noreferrer"><img src={mail} alt= "" className="mail-icon"/></a>
    </div>

    <div className="resume-link"><a href="https://drive.google.com/open?id=1mFgsNaf_oNkw3Nyz88PTXSPox6jaV_wg" alt="" target="_blank">Resume</a></div>
    </div>
    
    </section>

    {/* EDUCATION */}
    <section id="education" className="edu_sec" >
    <Education />
    </section>

    {/* PROJECTS */}
    <section id="projects" className="project_sec" >
    <Project />
    </section>
    
    {/* INTERNSHIPS */}
    <section id="internships" className="intern_sec" >
    <Internship />
    </section>

    {/* curriculars */}
    <section id="skills" className="skills_sec" >
    <Skills />
    </section>
    </div>
  );
}

export default App;
