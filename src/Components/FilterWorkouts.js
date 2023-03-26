import React from 'react';
import { Checkbox } from 'semantic-ui-react';

const FilterWorkouts = ({  categories, setSetlected }) => {

  const categoryButtons = categories.map((el) => (
    <button key={el} onChange={() => setSetlected(el)}>{el}</button>
  ))

  return (
    <div className="ui-radio-checkbox">
      <h5>Category Filters</h5>
      {categoryButtons}
    </div>
  )
};

export default FilterWorkouts;







