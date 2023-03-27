import React, { useState } from 'react';

function MobileMCQ(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  const { question, options } = props;

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='text-center'>
    <div className="px-4  py-6 lg:px-8 lg:py-8">
      <h3 className="text-lg font-medium lg:text-xl">{question}</h3>
      <ul className="mt-4 lg:mt-6">
        {options.map((option, index) => (
          <li key={index} className="flex items-center py-2 lg:py-3">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="option"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionSelect(option)}
                className="form-radio text-blue-500 h-4 w-4 lg:h-5 lg:w-5"
              />
              <span className="ml-2 text-gray-700 lg:ml-3">{option}</span>
            </label>
          </li>
        ))}
      </ul>
      <button
        disabled={!selectedOption}
        className={`mt-4 py-2 px-4 rounded-lg text-sm font-medium lg:text-base ${selectedOption ? 'bg-blue-500 text-white' : 'bg-gray-500 text-gray-700 cursor-not-allowed'}`}
      >
        Submit
      </button>
    </div>
    </div>
  );
}

export default MobileMCQ;
