import React from "react";
import COLORS from "../../Constants/Colors";
import { labelStyles } from "../../Constants/LabelStyles";

export default function InputField() {
  return (
    <div className="p-3">
      {/* firstName */}
      <div className="mb-3">
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label"
          style={labelStyles}
        >
          First Name
        </label>
        <input
          type="name"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter First Name Here..."
          style={{ backgroundColor: COLORS.inputBackground }}
        />
      </div>
      {/* LastName */}
      <div className="mb-3">
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label"
          style={labelStyles}
        >
          Last Name
        </label>
        <input
          type="name"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Last Name Here..."
          style={{ backgroundColor: COLORS.inputBackground }}
        />
      </div>
      {/* email */}
      <div className="mb-3">
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label"
          style={labelStyles}
        >
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          style={{ backgroundColor: COLORS.inputBackground }}
        />
      </div>
      {/* password  */}
      <label
        htmlFor="inputPassword6"
        className="col-form-label"
        style={labelStyles}
      >
        Password
      </label>
      <input
        type="password"
        id="inputPassword6"
        className="form-control"
        aria-describedby="passwordHelpInline"
        style={{ backgroundColor: COLORS.inputBackground }}
      />
      <div className="col-auto">
        <span id="passwordHelpInline" className="form-text">
          Must be 8-20 characters long.
        </span>
      </div>
    </div>
  );
}
