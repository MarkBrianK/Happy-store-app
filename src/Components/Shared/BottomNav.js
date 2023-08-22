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

export default function BottomNav({ onSearchClick }) {
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
            <a href="/search" onClick={onSearchClick}> 
              <span className={Styles.icon}>
                <FontAwesomeIcon
                  className={Styles.searchIcon}
                  icon={faMagnifyingGlass}
                  rotation={90}
                  size="lg"
                />
              </span>
            </a>
          </li>
          <li className="list-active" style={{ "--clr": "#f44336" }}>
            <a href="/like">
              <span className={Styles.icon}>
                <FontAwesomeIcon
                  className={Styles.heartIcon} 
                  icon={faHeart}
                  size="lg"
                />
              </span>
            </a>
          </li>
          <li className="list-active" style={{ "--clr": "#f44336" }}>
            <a href="/addCart">
              <span className={Styles.icon}>
                <FontAwesomeIcon
                  className={Styles.cartIcon} 
                  icon={faCartShopping}
                  size="lg"
                />
              </span>
            </a>
          </li>
          <li className="list-active" style={{ "--clr": "#f44336" }}>
            <a href="/account">
              <span className={Styles.icon}>
                <FontAwesomeIcon
                  className={Styles.profileIcon} 
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
