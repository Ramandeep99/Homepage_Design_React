import React from "react";
import "./section1.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { IoIosCheckbox } from "react-icons/io";

function Section1() {
  return (
    <div className="main">
      <h2>WHERE THE DREAM OF YOUR LAVISH VILLA COMES TRUE</h2>
      <p className="mainP">
        Become a Pride Resident of the Finest Locale of Gurugram
      </p>
      <div className="imgDiv">
        <img
          src="https://prestigegroupprojects.co.in/dew-drops/assets/img/about-img.jpg"
          alt="image"
        />
        <Container>
          <Row>
            <Col sm={12} md={4}>
              <Row className="section12">
                <Col className="section12Check" xs={2} sm={2} lg={2} md={4}>
                  <IoIosCheckbox className="section12CheckIcon" />
                </Col>
                <Col xs={10} sm={10} lg={10} md={8}>
                  <h5 className="section12heading">
                    Enticting Mix of Amenities
                  </h5>
                  <p className="section12para">
                    9 Ft Grand Entrance, 10K Sq. Ft Clubhouse & Other Provisions
                  </p>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={4}>
              <Row className="section12">
                <Col className="section12Check" xs={2} sm={2} lg={2} md={4}>
                  <IoIosCheckbox className="section12CheckIcon" />
                </Col>
                <Col sm={10} lg={10} md={8} xs={10}>
                  <h5 className="section12heading">
                    Exclusive Villa Luxury
                  </h5>
                  <p className="section12para">
                    Nature Homes with Classy Interiors and Engineered-wood Flooring
                  </p>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={4}>
              <Row className="section12">
                <Col className="section12Check" xs={2} sm={2} lg={2} md={4}>
                  <IoIosCheckbox className="section12CheckIcon" />
                </Col>
                <Col sm={10} lg={10} md={8} xs={10}>
                  <h5 className="section12heading">
                    Address of the Future
                  </h5>
                  <p className="section12para">
                    Placed near Upcoming Metro Station connecting Airports, KR Puram etc.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Section1;
