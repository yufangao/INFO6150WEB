import React, { useState } from 'react';
import '../static/css/Dropdown.css'
const DropdownWithSubselections = () => {
  const [prefer, setPrefer] = useState('none');
  const [specifiedPrefer, setSpecifiedPrefer] = useState('none');

  const types = {
    none: ['Please Select'],
    hat: ['MLB', 'Vans', 'Thrasher'],
    hoodie: ['Team Wang', 'Essential'],
    others: ['pants', 'watches', 'T-shirts'],
  };

  const handleTypeChange = (event) => {
    setPrefer(event.target.value);
    setSpecifiedPrefer(types[event.target.value][0]);
  };

  const handleSpecifyTypeChange = (event) => {
    setSpecifiedPrefer(event.target.value);
  };

  return (
    <div className='multy-select-dropdown'>
      <div className='multy-select-dropdown-hobby'>
        <label aria-label="select your preference">
          Please select another item to follow:
          <select
            id="prefer"
            value={prefer}
            onChange={handleTypeChange}
          >
            <option value="none">Please Select</option>
            <option value="hat">hat</option>
            <option value="hoodie">hoodie</option>
            <option value="others">others</option>
          </select>
        </label>
      </div>
      <div className='multy-select-dropdown-specify-type'>
        <label aria-label="select your specified item">
          Please select a specified item:
          <select
            id="specifiedPrefer"
            value={specifiedPrefer}
            onChange={handleSpecifyTypeChange}
          >
            {types[prefer].map((specifyType) => (
              <option key={specifyType} value={specifyType}>{specifyType}</option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default DropdownWithSubselections;