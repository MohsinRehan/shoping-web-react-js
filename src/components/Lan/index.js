import React from 'react';

const LanguageChange = (props) => {


  return (
    <div>
      <select onChange={props.onChange}   className="px-4 py-2">  
        <option value={"en"} selected={true}>
          English
        </option>
        <option value={"du"}>Dutch</option>
      </select>
    </div>
  );
};

export default LanguageChange;
