import React from 'react';

const Filter = ({ value, onChange }) => (
  <label>
    Find contact by name
    <input
      style={{ display: 'block' }}
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
