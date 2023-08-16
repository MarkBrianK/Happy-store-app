import React, { useState, useEffect } from "react";
import TextRendering from "../Shared/TextRendering";
import SheetModal from "../Shared/SheetModal";
import InputField from "../Shared/InputField";
import Button from "../Shared/Button";
import { labelStyles } from "../../Constants/LabelStyles";
import COLORS from "../../Constants/Colors";

export default function SignupComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
      name: {
        firstname: firstName,
        lastname: lastName,
      },
      phone: phoneNumber,
    };
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <div style={{ marginTop: "4px", marginBottom: "20px" }}>
        <TextRendering
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Sign Up
        </TextRendering>
      </div>
      <div style={{ overflow: "hidden" }}>
        <SheetModal>
          <form
            onSubmit={handleSignUp}
            style={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InputField>
              <div>
                {/* firstName */}
                <label
                  htmlFor="nameInput"
                  className="form-label"
                  style={labelStyles}
                >
                  Your First Name
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="firstNameInput"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={{
                    backgroundColor: COLORS.inputBackground,
                    height: 35,
                    padding: "3px",
                    fontSize:"18px"
                  }}
                />
              </div>
              <div>
                {/* lastName */}
                <label
                  htmlFor="nameInput"
                  className="form-label"
                  style={labelStyles}
                >
                  Your Last Name
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="lastNameInput"
                  placeholder="Your Last Name "
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  style={{
                    backgroundColor: COLORS.inputBackground,
                    height: 35,
                    padding: "3px",
                    fontSize:"18px"
                  }}
                />
              </div>
              <div>
                {/* email */}
                <div>
                  <label
                    htmlFor="emailInput"
                    className="form-label"
                    style={labelStyles}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      backgroundColor: COLORS.inputBackground,
                      height: 35,
                      padding: "3px",
                      fontSize:"18px"
                    }}
                  />
                </div>
              </div>
              {/* phoneNumber */}
              <div>
                <label
                  htmlFor="numberInput"
                  className="form-label"
                  style={labelStyles}
                >
                  phoneNumber
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="telInput"
                  placeholder="0711222345"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  style={{
                    backgroundColor: COLORS.inputBackground,
                    height: 35,
                    padding: "3px",
                    fontSize:"18px"
                  }}
                />
              </div>
              <div>
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      backgroundColor: COLORS.inputBackground,
                      height: 35,
                      padding: "3px",
                      fontSize:"18px"
                    }}
                  />
                  <span
                    id="passwordHelpInline"
                    className="form-text"
                    style={{ fontSize: "12px"}}
                  >
                    Must be 8-20 characters long.
                  </span>
                </div>
              </div>
            </InputField>

            <Button
              type="submit"
              style={{
                width: "80%",
                height: "50px",
              }}
            >
              <TextRendering
                style={{
                  fontWeight: "normal",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                Sign Up
              </TextRendering>
            </Button>
          </form>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextRendering
              style={{
                fontWeight: "normal",
                fontSize: 14,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "gray",
                marginBottom: "10px",
              }}
            >
              Already have an account?
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                Login
              </span>
            </TextRendering>
          </div>
        </SheetModal>
      </div>
    </div>
  );
}
