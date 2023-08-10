import React from "react";
import Rendering from "./TextRendering";

export default function Profile() {
  return (
    <div style={{ height: "20vh" }}>
      <div className="container text-center">
        <div className="row">
          <div className="col-4 d-flex justify-content-center align-items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcuUdM90r16K9sD4rENfEjsyBzZrDTWJSlw&usqp=CAU"
              className="card-img-top rounded-circle"
              alt="..."
              style={{
                border: "1px solid",
                height: "100px",
                width: "100px",
              }}
            />
          </div>
          <div className="col-4 d-flex flex-column justify-content-center align-items-center">
            <div className="card-body">
              <Rendering style={{ fontSize: "14px" }}>Irene Njuguna</Rendering>
              <p>+254791798403</p>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <a
              href="/"
              className="btn btn-transparent"
              style={{ border: "1px solid", width: "60px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                {/* ... (svg paths unchanged) ... */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>{" "}
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
