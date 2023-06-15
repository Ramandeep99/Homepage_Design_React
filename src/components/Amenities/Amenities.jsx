import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./amenities.css";

export default function Amenities() {
  return (
    <div className="amenities">
        <h2 className="amenities_heading">AMENITIES</h2>
      <Container md={10}>
        <Row>
          <Col md={3} sm={6} lg={3}>
            <div className="amenities_card">
              <img
                src="https://prestigegroupprojects.co.in/dew-drops/assets/img/amenities/Amenities-1.jpg"
                alt=""
              />
              <p>BADMINTION COURT</p>
            </div>
          </Col>
          <Col md={3} sm={6} lg={3}>
            <div className="amenities_card">
              <img
                src="https://prestigegroupprojects.co.in/dew-drops/assets/img/amenities/Amenities-2.jpg"
                alt=""
              />
              <p>GYMNASIUM</p>
            </div>
          </Col>
          <Col md={3} sm={6} lg={3}>
            <div className="amenities_card">
              <img
                src="https://prestigegroupprojects.co.in/dew-drops/assets/img/amenities/Amenities-3.jpg"
                alt=""
              />
              <p>FOOTBALL FIELD</p>
            </div>
          </Col>
          <Col md={3} sm={6} lg={3}>
            <div className="amenities_card">
              <img
                src="https://prestigegroupprojects.co.in/dew-drops/assets/img/amenities/Amenities-4.jpg"
                alt=""
              />
              <p>YOGA DECK</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={6}>
            <div className="amenities_card">
              <img
                src="https://prestigegroupprojects.co.in/dew-drops/assets/img/amenities/Amenities-5.jpg"
                alt=""
              />
              <p>PARTY HALL</p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="amenities_card">
              <img
                src="https://prestigegroupprojects.co.in/dew-drops/assets/img/amenities/Amenities-6.jpg"
                alt=""
              />
              <p>SKATING RING</p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="amenities_card">
              <img
                src="https://prestigegroupprojects.co.in/dew-drops/assets/img/amenities/Amenities-7.jpg"
                alt=""
              />
              <p>AMPITHEATRE</p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="amenities_card">
              <img
                src="https://prestigegroupprojects.co.in/dew-drops/assets/img/amenities/Amenities-8.jpg"
                alt=""
              />
              <p>BASKETBALL COURT</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
