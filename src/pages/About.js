import React from "react";
import {Link} from 'react-router-dom'
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div className="aboutTop"></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <div className="line"></div>
        <h4>A help to those who need it!</h4>
        <p>
        Pure Devotion Foundation was established during the challenging times of Covid-19 to help the widows of Vrindavan who were facing food scarcity due to the lockdown. We started by serving 80 matajis in the first month, and within a few months, our outreach expanded to 800+. Presently, we are providing support to 1000 widows in Vrindavan, Goverdhan, Radha Kund, and Haridwar.<br></br>
Over the past two years, we have made a significant impact on the lives of these widows, who have been abandoned by their families. They find themselves without shelter in their advanced age, thousands of kilometers away from their hometowns, facing numerous challenges.Lacking proper shelter, their only option is to beg or engage in domestic work in various homes. We step in to help them and ensure that they don't have to beg or do physical labor at this stage of their lives.<br></br>

These widows come here from Bengal and sincerely engage themselves in Krishna bhakti to achieve the ultimate goal of the human-form in this life. It is our duty to address their concerns about daily needs so that they can peacefully perform their sadhan bhajan.Our primary objective is to ensure that in this final stage of life, they are not disturbed by basic needs. Instead, they can peacefully pursue their spiritual practices and achieve their ultimate goal of going back to Godhead, which brought them to this sacred place.
        </p>
      </div>
      <div className="about_foot">
        <p>Each donation is an essential help which improves everyone's life</p>
        <Link to="/donatenow"><button>Yes I want to help!</button></Link>
      </div>
    </div>
  );
}

export default About;
