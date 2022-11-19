import './NewSkillForm.css';
import { useState } from 'react';

function NewSkillForm({skills, setSkills}) {
    const [newSkill, setNewSkill] = useState({
        name: '',
        level: 3
    })
    
    const handleAddSkill = (event) => {
        // this line prevents the page from reloading after a form submission
        event.preventDefault()
        setSkills([...skills, newSkill])
        setNewSkill({
            name: '',
            level: 3
        })
    }
    
    const handleNameChange = (event) => {
        setNewSkill({name:event.target.value, level: newSkill.level})
    }

    const handleSkillChange = (event) => {
        setNewSkill({name: newSkill.name, level: event.target.value})
    }

    return ( 
        <form onSubmit={handleAddSkill} className="NewSkillForm">
            <label>Skill: </label>
                <input value={newSkill.name} onChange={handleNameChange} className="input" required></input>
            <label>Level: </label>
                <select value={newSkill.level} onChange={handleSkillChange} className="select">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            <button type="submit">Add Skill</button>
        </form>
    );
  }

export default NewSkillForm;