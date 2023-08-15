
import React, { useEffect } from "react";
import TextRendering from "../Shared/TextRendering";
import SheetModal from "../Shared/SheetModal";
import InputField from "../Shared/InputField";
import Button from "../Shared/Button";
import { labelStyles } from "../../Constants/LabelStyles";
import COLORS from "../../Constants/Colors";

export default function SignupComponent() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

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
          <div>
            <form
              style={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <InputField>
                <div>
                  {/* firstName */}
                  <label
                      htmlFor="emailInput"
                      className="form-label"
                      style={labelStyles}
                    >
                      Your Full Name
                    </label>
                  <input
                    type="text"
                    className="form-control "
                    id="firstNameInput"
                    placeholder="Enter Your Name Here..."
                    style={{
                      backgroundColor: COLORS.inputBackground,
                      height: 50,
                      padding: "10px",
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
                      style={{
                        backgroundColor: COLORS.inputBackground,
                        height: 50,
                        padding: "10px",
                      }}
                    />
                  </div>
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
                      style={{
                        backgroundColor: COLORS.inputBackground,
                        height: 50,
                        padding: "10px",
                      }}
                    />
                    <span
                      id="passwordHelpInline"
                      className="form-text"
                      style={{ fontSize: "12px", marginTop: "2px" }}
                    >
                      Must be 8-20 characters long.
                    </span>
                  </div>
                </div>
                <div>
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
                      style={{
                        backgroundColor: COLORS.inputBackground,
                        height: 50,
                        padding: "10px",
                      }}
                    />
                  </div>
                </div>
              </InputField>
            </form>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button style={{ width: "80%", padding: "1px",height:"50px" }}>
              <TextRendering
                style={{
                  fontWeight: "normal",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop:"15px"
                }}
              >
                Sign Up
              </TextRendering>
            </Button>
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

