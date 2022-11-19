import './NewSkillList.css';

function SkillListItem({name, level}) {
    return (
      <li className='SkillListItem'>{name}<p className='level'> Level: {level}</p></li>
    );
  }

export default SkillListItem;