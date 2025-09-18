import React, { useState } from "react";

const SelectBox = ({ options, onChange }) => {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div style={{ margin: "1rem 0" }}>
      <select
        value={selected}
        onChange={handleChange}
        style={{
          width: "90vw",
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid gray",
          margin: "0px 15px",
          appearance: "none", // removes browser default arrow (optional)
        }}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            style={{
              width: "90vw", // makes option take full width of select
              padding: "8px", // same padding as select
            }}
          >
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
