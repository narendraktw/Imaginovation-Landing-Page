import Proptypes from "prop-types";
import React, { useState } from "react";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import Menubar from '../menubar/Menubar';

import RocketImg from "../../assets/images/rocket-opt-img.png";
import Menu from "../../assets/images/menu.png";
import "./Header.css";
import Modal from "../../common/modal/modal";

function Header() {
  const [status, setStatus] = useState(false);
  const [isToggle, setToggle] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setToggle(!isToggle);
  };

  return (
    <header className="header">
      <nav className="nav">
        <figure>
          <Logo width="300px" />
        </figure>
        <menu>
          { isToggle && <Menubar /> }
          <Button className="talkbutton" text="LET'S TALK" />
          <button
            aria-label="menu"
            className={isToggle ? "rotate" : ''}
            onClick={handleClick}
          >
            <img src={Menu} height="21px" alt="menu" />
          </button>
        </menu>
      </nav>
      <section className="wrapper">
        <hgroup>
          <div>
            <h1>TURNING YOUR IDEAS INTO A DIGITAL REALITY</h1>
            <h3>
              BUILDING CUSTOM WEB & MOBILE APPS THAT TRANSFORM YOUR BUSINESS
            </h3>
            <Button className="button" text="Project Cost Calculator" />
          </div>
          <article>
            <figure>
              <img src={RocketImg} alt="Watch Video" />
              <figcaption onClick={() => setStatus(true)}>
                WATCH OUR VIDEO
              </figcaption>
            </figure>
          </article>
        </hgroup>
      </section>
      <div>
        {status && (
          <Modal closeModal={() => setStatus(false)}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/aN3odcBtkFA"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Modal>
        )}
        <div className="container">
          <h2>This is the page content</h2>
        </div>
      </div>
    </header>
  );
}
export default Header;
