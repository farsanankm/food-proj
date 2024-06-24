import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

function Contact() {
  return (
    <Container className='c mt-5'>
      <Row>
        <Col className="text-center">
          <p style={{ fontFamily: "serif", fontSize: "300%" }}>Contact Details</p>
          <ul className="list-unstyled">
            <li style={{ fontFamily: "serif", fontSize: "150%" }}>Mobile No: 9946949365</li>
            <li style={{ fontFamily: "serif", fontSize: "150%" }}>E-Mail: demo@gmail.com</li>
          </ul>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="text-center">
          <p style={{ fontFamily: "serif", fontSize: "300%" }}>Place your Orders</p>
          <Form className="d-flex flex-column align-items-center">
            <Form.Group as={Row} className="mb-3 align-items-center w-100">
              <Form.Label column sm={3} style={{ fontFamily: "serif", fontSize: "150%" }}>Enter your name</Form.Label>
              <Col sm={9} className="d-flex justify-content-center">
                <Form.Control type="text" placeholder="Enter your name" style={{ width: "50%" }} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-items-center w-100">
              <Form.Label column sm={3} style={{ fontFamily: "serif", fontSize: "150%" }}>Address</Form.Label>
              <Col sm={9} className="d-flex justify-content-center">
                <Form.Control type="text" placeholder="Enter your address" style={{ width: "50%" }} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-items-center w-100">
              <Form.Label column sm={3} style={{ fontFamily: "serif", fontSize: "150%" }}>Landmark</Form.Label>
              <Col sm={9} className="d-flex justify-content-center">
                <Form.Control type="text" placeholder="Enter a landmark" style={{ width: "50%" }} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-items-center w-100">
              <Form.Label column sm={3} style={{ fontFamily: "serif", fontSize: "150%" }}>Contact Number</Form.Label>
              <Col sm={9} className="d-flex justify-content-center">
                <Form.Control type="text" placeholder="Enter your contact number" style={{ width: "50%" }} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-items-center w-100">
              <Form.Label column sm={3} style={{ fontFamily: "serif", fontSize: "150%" }}>Email</Form.Label>
              <Col sm={9} className="d-flex justify-content-center">
                <Form.Control type="email" placeholder="Enter your email" style={{ width: "50%" }} />
              </Col>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="footer-section d-flex justify-content-around flex-wrap p-5 mt-5">
        <Col className='footer-column'>
          <h5>CONTACT</h5>
          <div className='pt-3'>
            <h6>130/Plot No. 20, 15th Phase,</h6>
            <h6>Koduvally, Malappuram, Bangalore</h6>
          </div>
          <div className='pt-3'>
            <h6>+91 9946949365</h6>
            <h6>+91 123-456-7890</h6>
          </div>
          <div className='pt-3'>
            <h6>demo@gmail.com</h6>
            <h6>demo@gmail.com</h6>
          </div>
        </Col>
        <Col className='footer-column'>
          <h5>OUR LINKS</h5>
          <h6 className='pt-3'>Home</h6>
          <h6 className='pt-3'>About Us</h6>
          <h6 className='pt-3'>Services</h6>
          <h6 className='pt-3'>Team</h6>
          <h6 className='pt-3'>Blog</h6>
        </Col>
        <Col className='footer-column'>
          <h5>OUR SERVICES</h5>
          <h6 className='pt-3'>Dining</h6>
          <h6 className='pt-3'>Take away</h6>
          <h6 className='pt-3'>Reservation</h6>
          <h6 className='pt-3'>Our Premium Looks</h6>
        </Col>
        <Col className='footer-column'>
          <h5>HELP CENTER</h5>
          <h6 className='pt-3'>FAQ</h6>
          <h6 className='pt-3'>Shop</h6>
          <h6 className='pt-3'>Category Filter</h6>
          <h6 className='pt-3'>Testimonials</h6>
          <h6 className='pt-3'>Contact Us</h6>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
