import React from "react";

import "./footer.css";
import { Container, Row } from "react-bootstrap";

import Twitter from "../../assets/footer/twitter.png";
import Twitch from "../../assets/footer/twitch.png";
import Discord from "../../assets/footer/discord.png";

function Footer () {

  return (
    <div className="footer-container desktop-version">
      <div className="footer-top">
        <Container>
          <section className="footer-section1">
            <div className="footer-section1-layout">
              {/* <div className="footer-sectiion-icon">
                <img
                  alt=""
                  src={Facebook}
                  className="footer-sectiion-icon-round"
                />
              </div> */}
              <a className="footer-sectiion-icon" href="">
                <img
                  alt=""
                  src={Twitter}
                  className="footer-sectiion-icon-round"
                />
              </a>
              <a className="footer-sectiion-icon" href="">
                <img
                  alt=""
                  src={Twitch}
                  className="footer-sectiion-icon-round"
                />
              </a>
              <a className="footer-sectiion-icon" href="">
                <img
                  alt=""
                  src={Discord}
                  className="footer-sectiion-icon-round"
                />
              </a>
            </div>
            <Row>
              <p className="footer-sectiion1-text">
                <span className="footer-sectiion1-span"></span> is a connection from the past to the present to the future.
              </p>
            </Row>
          </section>
        </Container>
      </div>
      <div className="footer-bottom">
        <section className="footer-copyright">
          <Row>
            <p className="footer-copyright-text">
            Copyright 2022 . All Rights Reserved.
            </p>
          </Row>
        </section>
      </div>
    </div>
  );
}

export default Footer;
