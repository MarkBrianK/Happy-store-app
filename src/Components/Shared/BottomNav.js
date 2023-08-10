import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Styles from "../../Styles/bottomNav.module.css";

export default function BottomNav() {
  return (
    <div className="fixed-bottom">
      <div className={Styles.navigation}>
        <ul>
          <li className="list-active" style={{ "--clr": "#f44336" }}>
            <a href="/">
              <span className={Styles.icon}>
                <FontAwesomeIcon
                  className={Styles.houseIcon}
                  icon={faHouse}
                  size="lg"
                  style={{ color: "#bdcce5" }}
                />
              </span>
            </a>
          </li>
          <li className="list-active" style={{ "--clr": "#f44336" }}>
            <a href="/">
              <span className={Styles.icon}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  rotation={90}
                  size="lg"
                  style={{ color: "#bdcce5" }}
                />
              </span>
            </a>
          </li>
          <li className="list-active" style={{ "--clr": "#f44336" }}>
            <a href="/">
              <span className={Styles.icon}>
                <FontAwesomeIcon
                  icon={faHeart}
                  size="lg"
                  style={{ color: "#bdcce5" }}
                />
              </span>
            </a>
          </li>
          <li className="list-active" style={{ "--clr": "#f44336" }}>
            <a href="/">
              <span className={Styles.icon}>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="lg"
                  style={{ color: "#bdcce5" }}
                />
              </span>
            </a>
          </li>
          <li className="list-active" style={{ "--clr": "#f44336" }}>
            <a href="/">
              <span className={Styles.icon}>
                <FontAwesomeIcon
                  icon={faUser}
                  size="lg"
                  style={{
                    "--fa-primary-color": "#ffd233",
                    "--fa-secondary-color": "#ffd233",
                  }}
                />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
