import React from "react";

export default function InputField({ label, type, placeholder }) {
  return (
    <div className="p-3 mb-2">
    <label htmlFor={`${type}Input`} className="form-label" style={

    {
      //  add styles here. You an create a dyle file or input directly
    }}>
          {label}
        </label>
        <input
          type={type}
          id={`${type}Input`}
          className="form-control"
          placeholder={placeholder}
          style={

            {
              //  add styles here. You an create a dyle file or input directly
            }}
        />

    </div>
  );
}
