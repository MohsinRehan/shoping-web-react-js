import React from "react";

const LanguageChange = (props) => {
  return (
    <div>
      <select onChange={props.onChange}>
        <option>Select Language</option>
        <option value={"en"} selected={true}>
          English
        </option>
        <option value={"du"}>Dutch</option>
      </select>
    </div>
  );
};

export default LanguageChange;
