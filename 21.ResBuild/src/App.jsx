import { useState } from "react";
import "./App.css";

function App() {
  const[name,setName]=useState()

  return (
    <>
      <div className="form">
        <form>
          <div className="personalInfo">
            <h3>Personal Info</h3>
            <div className="name">
              <label htmlFor="name">Name:</label>
              <input type="text" onChange={(e)=>{
                setName(e.target.value)
              }} name="name" id="name" />
            </div>
            <div className="mail">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="linkedin">
              <label htmlFor="linkedin">LinkedIn:</label>
              <input type="text" name="linkedin" id="linkedin" />
            </div>
          </div>

          <div className="eduInfo">
            <h3>Education</h3>
            <form>
              <input type="text" name="edu-cllg"  id="edu-cllg" placeholder="College Name" />
              <input type="text" name="edu-degree" id="edu-degree" placeholder="Degree Name" />
              <div className="edu-year">
                 <h4>Year</h4>
                <input type="text" name="edu-year-start" id="edu-year-start" placeholder="Year From" />
                <input type="text" name="edu-year-end" id="edu-year-end" placeholder="To" />
              </div>
            <button>Add Education</button>
            </form>
          </div>
          <div className="skillsInfo">
            <h3>Skills</h3>
            <input type="text" name="skill"  id="skill" placeholder="Skill Name" />
            <button>Add Skills</button>
          </div>
          <div className="workInfo">
            <h3>Experience</h3>
            <input type="text" name="" id="" />
            <button>Add Experience</button>
          </div>
        </form>

      </div>
      <div className="resume">
        <div className="jaisal">
          Jaisal:{name}
        </div>
      </div>

    </>
  );
}

export default App;
