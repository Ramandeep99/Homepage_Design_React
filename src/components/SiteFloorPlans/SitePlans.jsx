import React from "react";
import "./sitePlans.css";
import { Container, Row, Col } from "react-bootstrap";

export default function SitePlans() {
  return (
    <div className="form_wrapper">
      <Container>
        <h2 className="sitePlans_heading">Site And Floor Plans</h2>
        <Row>
          <Col md={{ span: 4, offset: 2 }}>
            <div className="sitePlan_card">
              <img
                src="https://prestigegroupprojects.co.in/dew-drops/assets/img/Site-Plan.jpg"
                alt=""
              />
              <p>Master Plan</p>
            </div>
          </Col>
          <Col md={{ span: 4, offset: 0 }}>
            <div className="sitePlan_card">
              <img
                src="https://prestigegroupprojects.co.in/dew-drops/assets/img/Vila-Plan.jpg"
                alt=""
              />
              <p>Villa Plan</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
