import React from "react";
import "./pricingDetails.css";
import { Row, Col, Container, Table } from "react-bootstrap";

export default function PricingDetails() {
  return (
    <div>
      <Container>
        <h2 className="pricing_heading">Pricing Details</h2>
        <Row>
          <Col md={8} sm={12}>
            <Table striped bordered hover>
                <tr>
                    <th>Inverntory Types</th>
                    <th>Size (sq. ft)</th>
                    <th>Prices $</th>
                </tr>
                <tr>
                    <td>Villa</td>
                    <td>3500 - 5800 (sq. ft)</td>
                    <td>
                        <Row>
                            <Col md={6} style={{display:'flex', alignItems:'center'}}>$12000</Col>
                            <Col md={6}>
                                <button className="btn1 btn-secondary">Price Breakup</button>
                            </Col>
                        </Row>
                    </td>
                </tr>
            </Table>
          </Col>
          <Col md={4} sm={12}>
            <div className="pricing_right_card">
              <img
                src="https://prestigegroupprojects.co.in/dew-drops/assets/img/costing-details.jpg"
                alt=""
              />
              <p>Complete Costing Details</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
