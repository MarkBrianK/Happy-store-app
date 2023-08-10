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
                />
              </span>
            </a>
          </li>
          <li className="list-active" style={{ "--clr": "#f44336" }}>
            <a href="/">
              <span className={Styles.icon}>
                <FontAwesomeIcon
                  className={Styles.searchIcon} // Change this
                  icon={faMagnifyingGlass}
                  rotation={90}
                  size="lg"
                  //   style={{ color: "#bdcce5" }}
                />
              </span>
            </a>
          </li>
          <li className="list-active" style={{ "--clr": "#f44336" }}>
            <a href="/">
              <span className={Styles.icon}>
                <FontAwesomeIcon
                  className={Styles.heartIcon} // Change this
                  icon={faHeart}
                  size="lg"
                />
              </span>
            </a>
          </li>
          <li className="list-active" style={{ "--clr": "#f44336" }}>
            <a href="/">
              <span className={Styles.icon}>
                <FontAwesomeIcon
                  className={Styles.cartIcon} // Change this
                  icon={faCartShopping}
                  size="lg"
                />
              </span>
            </a>
          </li>
          <li className="list-active" style={{ "--clr": "#f44336" }}>
            <a href="/">
              <span className={Styles.icon}>
                <FontAwesomeIcon
                  className={Styles.profileIcon} // Change this
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
