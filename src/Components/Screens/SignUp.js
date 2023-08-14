import React, { useEffect } from "react";
import TextRendering from "../Shared/TextRendering";
import SheetModal from "../Shared/SheetModal";
import InputField from "../Shared/InputField";
import Button from "../Shared/Button";
// import Footer from "./Footer";

export default function SignupComponent() {
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <div style={{marginTop:"4px",marginBottom:"20px"}}>
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
      <div style={{overflow: "hidden",}}>
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
                <InputField />
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
              <Button style={{ width: "80%", padding: "10px" }}>
                <TextRendering
                  style={{
                    fontWeight: "normal",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
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

      {/* <Footer /> */}
    </div>
  );
}

