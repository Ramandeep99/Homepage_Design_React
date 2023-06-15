import React from "react";
import "./location.css";
import { Col, Container, Row } from "react-bootstrap";
import { GrLocation } from "react-icons/gr";

export default function Location() {
    
  return (
    <div className="location_container">
      <h2 className="location_heading">Location</h2>
      <div className="location_api_div">
        {/* 13.184294136687825, 77.55561249707951 */}
        <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*BMHYnlwecCbzxvUkVNBeoA.png" alt="" />
      </div>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} lg={4} className="location_textSection">
            <div className="loaction_textSection_wrapper">
              <div className="icon_wrapper">
                <GrLocation className="location_textSection_Icon" />
              </div>
              <div className="text_wrapper">
                <span className="location_textSection_text">
                  SAI VIDYA INSTITUTE OF TECHNOLOGY - 7 MINS
                </span>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} className="location_textSection">
            <div className="loaction_textSection_wrapper">
              <div className="icon_wrapper">
                <GrLocation className="location_textSection_Icon" />
              </div>
              <div className="text_wrapper">
                <span className="location_textSection_text">
                  ORCHIDS THE INTERNATIONAL SCHOOL - 10 MINS
                </span>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} className="location_textSection">
            <div className="loaction_textSection_wrapper">
              <div className="icon_wrapper">
                <GrLocation className="location_textSection_Icon" />
              </div>
              <div className="text_wrapper">
                <span className="location_textSection_text">
                  OMEGA MULTISPECIALITY HOSPITAL - 19 MINS
                </span>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} className="location_textSection">
            <div className="loaction_textSection_wrapper">
              <div className="icon_wrapper">
                <GrLocation className="location_textSection_Icon" />
              </div>
              <div className="text_wrapper">
                <span className="location_textSection_text">
                  GARUDA MALL - 20 MINS
                </span>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} className="location_textSection">
            <div className="loaction_textSection_wrapper">
              <div className="icon_wrapper">
                <GrLocation className="location_textSection_Icon" />
              </div>
              <div className="text_wrapper">
                <span className="location_textSection_text">
                  MANYATA TECH PARK - 40 MINS
                </span>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} className="location_textSection">
            <div className="loaction_textSection_wrapper">
              <div className="icon_wrapper">
                <GrLocation className="location_textSection_Icon" />
              </div>
              <div className="text_wrapper">
                <span className="location_textSection_text">AIRPORT - 40 MINS</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
}
