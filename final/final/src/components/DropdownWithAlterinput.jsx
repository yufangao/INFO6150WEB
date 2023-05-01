import React, { useState } from 'react';
import '../static/css/Dropdown.css'
const DropdownWithAlterinput = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [otherOption, setOtherOption] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOtherOptionChange = (event) => {
    setOtherOption(event.target.value);
  };

  return (
    <div className="subscribe-brand">
      <label aria-label='select your brand'>
        <span>Please select your favorite Brand:</span>
        <select
          id="dropdown"
          value={selectedOption}
          onChange={handleDropdownChange}
        >
          <option value="none">Please Select</option>
          <option value="Nike">Nike</option>
          <option value="Adidas">Adidas</option>
          <option value="Other">Other</option>
        </select>
      </label>
      {selectedOption === 'Other' && (
        <div className='other-option'>
        <label aria-label='other option'>
          <span>Please input your favorite brand:</span>
          <input
            id="other-option"
            value={otherOption}
            onChange={handleOtherOptionChange}
          />
        </label>
        </div>
      )}
    </div>
  );
};
export default DropdownWithAlterinput;