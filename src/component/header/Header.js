import Proptypes from "prop-types";
import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import Menubar from "../menubar/Menubar";

import RocketImg from "../../assets/images/rocket-opt-img.png";
import Menu from "../../assets/images/menu.png";
import TelIcon from "../../assets/images/download.png";
import Modal from "../../common/modal/modal";
import "./Header.css";

function Header() {
  const [status, setStatus] = useState({
    videoStatus: false,
    formStatus: false,
  });

  const [isToggle, setToggle] = useState(false);
 
  const handleClick =  useCallback((e) => {
    e.preventDefault();
    setToggle(!isToggle);
  },[isToggle])

  const showPopup = useCallback(() => {
    return setStatus({
      ...status,
      videoStatus: true,
    });
  }, [status.videoStatus]);

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <header className="header">
      <nav className="nav">        
        <figure>
          <Logo width="300px" />
        </figure>
        <menu>
          {isToggle && <Menubar />}
          <Button
            className="talkbutton"
            text="LET'S TALK"
            onClick={(e) => {
              e.preventDefault();
              setStatus({
                ...status,
                formStatus: true,
              });
            }}
          />
          {status.formStatus && (
            <Modal
              closeModal={() =>
                setStatus({
                  ...status,
                  formStatus: false,
                })
              }
            >
              <div className="contactUs">
                <h1>Let's Talk</h1>
                <div className="form">
                  <div className="form-left">
                      <div className="addressinfo">
                        <p className="address-name">RALEIGH</p>
                        <div className="address-text">
                          <p>8801 Fast Park Dr Suite 301</p>
                          <p>Raleigh, NC 27617</p>
                        </div>
                      </div>
                      <div className="addressinfo">
                        <p className="address-name">Cary</p>
                        <div className="address-text">
                          <p>1903 N. Harrison Avenue, Suite 200</p>
                          <p>Cary, NC 27513</p>
                        </div>
                      </div>
                      <div className="addressinfo">
                        <p className="address-name">Charlotte</p>
                        <div className="address-text">
                          <p>15720 Brixham Hill Avenue, Suite 300</p>
                          <p>Charlotte NC 28277</p>
                        </div>
                      </div>
                      
                    
                    <div className="social-links">
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                      <a href="#">
                        <i
                          className="fa fa-youtube-play"
                          aria-hidden="true"
                        ></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                  <div className="form-right">
                        <form onSubmit={handleSubmit(onSubmit)}>
                          {/* register your input into the hook by invoking the "register" function */}
                          <input
                            name="form"
                            placeholder="Name"
                            ref={register}
                          />

                          {/* include validation with required or other standard HTML validation rules */}
                          <input
                            name="formRequired"
                            placeholder="Email"
                            ref={register({ required: true })}
                          />
                           <input
                            name="formRequired"
                            placeholder="Phone Number"
                            ref={register}
                          />
                          <textarea
                            name="formRequired"
                            placeholder="How can we help your business?"
                            ref={register}
                          />
                          {/* errors will return when field validation fails  */}
                          {errors.exampleRequired && (
                            <span>This field is required</span>
                          )}

                          <input type="submit" />
                        </form>
                      </div>
                </div>
              </div>
            </Modal>
          )}
          <img src={TelIcon} className="telIcon" />
          <button
            aria-label="menu"
            className={isToggle ? "rotate" : ""}
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
              <figcaption onClick={showPopup}>WATCH OUR VIDEO</figcaption>
            </figure>
          </article>
        </hgroup>
      </section>
      <div>
        {status.videoStatus && (
          <Modal
            closeModal={() =>
              setStatus({
                ...status,
                videoStatus: false,
              })
            }
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/aN3odcBtkFA"
              frameBorder="0"
              allowFullScreen={true}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Modal>
        )}
      </div>
    </header>
  );
}
export default Header;
