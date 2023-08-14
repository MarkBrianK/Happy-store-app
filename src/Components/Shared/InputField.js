import React from "react";
import COLORS from "../../Constants/Colors";
import { labelStyles } from "../../Constants/LabelStyles";

export default function InputField() {
  return (
    <div className="p-3">
      {/* firstName */}
      <div>
        <label
          htmlFor="firstNameInput"
          className="form-label"
          style={labelStyles}
        >
          Full Name
        </label>
        <input
          type="text"
          className="form-control "
          id="firstNameInput"
          placeholder="Enter Your Name Here..."
          style={{ backgroundColor: COLORS.inputBackground ,height: 50,padding:"10px" }}
        />
      </div>

      {/* email */}
      <div>
        <label htmlFor="emailInput" className="form-label" style={labelStyles}>
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          placeholder="name@example.com"
          style={{ backgroundColor: COLORS.inputBackground ,height: 50,padding:"10px" }}
        />
      </div>
      {/* password */}
      <div>
        <label
          htmlFor="passwordInput"
          className="form-label"
          style={labelStyles}
        >
          Password
        </label>
        <input
          type="password"
          id="passwordInput"
          className="form-control"
          aria-describedby="passwordHelpInline"
          style={{ backgroundColor: COLORS.inputBackground ,height: 50,padding:"10px" }}
        />
        <span id="passwordHelpInline" className="form-text" style={{fontSize:"12px",marginTop:"2px"}}>
          Must be 8-20 characters long.
        </span>
      </div>
      {/* confirm Password */}
      <div>
        <label
          htmlFor="passwordInput"
          className="form-label"
          style={labelStyles}
        >
          Confirm Password
        </label>
        <input
          type="confirm-password"
          id="confirm-passwordInput"
          className="form-control"
          aria-describedby="passwordHelpInline"
          style={{ backgroundColor: COLORS.inputBackground ,height: 50,padding:"10px" }}
        />
      </div>
    </div>
  );
}
