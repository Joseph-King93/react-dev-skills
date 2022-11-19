import './App.css';
import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";
import { useState } from 'react';


function App() {
  
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);
  
  return (
    <div className="App teal-text">
      <h1>React Skill List</h1>

      
        <ul className=' padding-0'>
          {skills.map(skill => (
            <SkillList 
              key={skill.name}
              name={skill.name} 
              level={skill.level} 
            />           
          ))}
        </ul>
      <hr ></hr>
      <NewSkillForm setSkills={setSkills} skills={skills}/>
    </div>    
  );
}

export default App;