import React from "react";
import TextRendering from "../Shared/TextRendering";
import SheetModal from "../Shared/SheetModal";
import COLORS from "../../Constants/Colors";
import { Rating } from "../../Icons/Rating";

export default function ProductComponent() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div>
        <TextRendering className="card text-center">
          Product Details
        </TextRendering>

        <div class="card text-center" style={{ width: "18rem" }}>
          <img
            src="https://contents.mediadecathlon.com/p1733131/k$c064a61fd1627660aa0bbd803446e45f/men-s-uv-water-t-shirt-white.jpg?format=auto&quality=40&f=800x800"
            class="card-img-top bg-dark"
            alt="..."
          />
        </div>
        <div className="card-body text-center">
          <TextRendering>Sizes</TextRendering>
          <div>
            <button
              type="button"
              class="btn btn-secondary  p-2 m-2 bg-dark border border-3 border-info-emphasis rounded-5 rounded-top-0"
              disabled
            >
              41
            </button>
            <button
              type="button"
              class="btn btn-secondary p-2 m-2 bg-dark border border-3 border-info-emphasis rounded-5 rounded-top-0"
              disabled
            >
              42
            </button>
            <button
              type="button"
              class="btn btn-secondary p-2 m-2 bg-dark border border-3 border-info-emphasis rounded-5 rounded-top-0"
              disabled
            >
              43
            </button>
            <button
              type="button"
              class="btn btn-secondary p-2 m-2 bg-dark border border-3 border-info-emphasis rounded-5 rounded-top-0"
              disabled
            >
              44
            </button>
          </div>
        </div>
        {/* sheetmodal */}
        <SheetModal style={{ height: "40vh", border: "2px solid black" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <TextRendering>Nike Blazer Mid 77</TextRendering>
            </div>
            <div>
              <Rating />
            </div>
          </div>
          <div class="container text-center m-2">
        <div class="row justify-content-between pr-2 text-nowrap">
          <div class="col-4">
            <TextRendering>Description</TextRendering>
          </div>
          <div class="col-4">
            <TextRendering
              style={{ color: COLORS.Yellowish, fontSize: "12" }}
            >
              4.9
            </TextRendering>
          </div>
          <p>
            HEYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          </p>
        </div>
      </div>
        </SheetModal>
      </div>
    </div>
  );
}
