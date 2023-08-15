import React from "react";

export default function InputField({ label, type, placeholder, value, onChange }) {
  return (
    <div className="p-3 mb-2">
      <label htmlFor={`${type}Input`} className="form-label" style={{ fontWeight: "600" }}>
        {label}
      </label>
      <input
        type={type}
        id={`${type}Input`}
        className="form-control"
        placeholder={placeholder}
        style={{ backgroundColor: "#F5F5F7" }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
