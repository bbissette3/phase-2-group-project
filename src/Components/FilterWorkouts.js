import React from 'react';
import { Checkbox } from 'semantic-ui-react';

const FilterWorkouts = ({  categories, toggleCategory, selected }) => {

  const categoryButtons = categories.map((el) => (
    <div key={el} className="checkbox-wrapper">
      <Checkbox 
        label={el} 
        onChange={() => toggleCategory(el)} 
        checked={el === "All" ? selected.length === 0 || selected.includes("All") : selected.includes(el)}
      />
    </div>
  ));

  return (
    <div className="checkbox">
      <h5>Filters</h5>
      {categoryButtons}
    </div>
  )
};

export default FilterWorkouts;