import Footer from "./footer";
import './index.css';
import PortalCard from "./portal-card";
import React from "react";
import { faBuilding} from "@fortawesome/free-regular-svg-icons";
import { faPersonChalkboard, faDiceSix, faPeopleGroup, faClipboardQuestion, faGears } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
    <section className="flex flex-wrap m-4 bg-slate-50 p-4">
        <PortalCard 
          icon={faBuilding}
          title = 'Instructor led classroom training'
          description = 'Elevate your skills with our engaging instructor-led classroom training sessions, designed to foster meaningful learning experiences.'
        />
        <PortalCard
          icon = {faPersonChalkboard}
          title = 'Online access using webinars'
          description = 'Gain convenient access to valuable knowledge through interactivewebinars, empowering you to learn anytime, anywhere.'
        />
        <PortalCard
          icon = {faDiceSix}
          title = 'Portals for every course'
          description = 'Explore dedicated portals for each course, providing seamless access to comprehensive resources and materials tailored to your learning journey.'
        />
      <PortalCard 
        icon={faGears}
        title = 'Online Recordings'
        description = 'Access our library of online recordings, ensuring you never miss a session and can review course material at your convenience.'
      />
      <PortalCard
        icon = {faClipboardQuestion}
        title = 'Timed Quiz and Video Interviews'
        description = 'Engage in timed quizzes and video interviews, sharpening your skills and preparing you for real-world challenges with interactive assessments.'
      />
      <PortalCard
        icon = {faPeopleGroup}
        title = 'Practice with Group mocks'
        description = 'Participate in instructor-led group mock sessions, simulating real-world scenarios to refine your skills and boost your confidence.'
      />
    </section>

    <Footer/>
    </>
  )
}

export default App;
