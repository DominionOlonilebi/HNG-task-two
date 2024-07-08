import React from "react";
import {
  Breadcrumb,
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div>
      <div className="cart-page">
        <img src="./img/pic 1.png" alt="phone image" className="img-fluid"/>
      </div>
      <section fluid className="message-container pt-5">
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <div className="col-lg-9 col-md-12 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="col-md-8 text-start">
                    <Breadcrumb className="breadcrumbs">
                      <Breadcrumb.Item>
                        {" "}
                        <Link to="/" className="link">
                          Home
                        </Link>{" "}
                      </Breadcrumb.Item>
                      <Breadcrumb.Item>
                        <Link to="/product" className="link">
                          Phones
                        </Link>
                      </Breadcrumb.Item>
                      <Breadcrumb.Item>
                        <Link to="/product" className="link">
                          iPhone 14 PRO Max
                        </Link>
                      </Breadcrumb.Item>
                      <Breadcrumb.Item>
                        <Link to="/cart" className="link">
                          Shopping Cart
                        </Link>
                      </Breadcrumb.Item>
                      <Breadcrumb.Item active className=" text-danger">
                        Billing Details
                      </Breadcrumb.Item>
                    </Breadcrumb>
                  </div>
                </div>
              </div>
              <Form>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <label className="form-label">FirstName</label>
                    <InputGroup>
                      <input
                        type="text"
                        className="form-control mb-4"
                        required
                      />
                    </InputGroup>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">LastName</label>
                    <InputGroup>
                      <input
                        type="email"
                        className="form-control mb-4"
                        required
                      />
                    </InputGroup>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <label className="form-label">Country/Region</label>
                    <InputGroup>
                      <input
                        type="text"
                        className="form-control mb-4"
                        required
                      />
                    </InputGroup>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Street Address</label>
                    <InputGroup>
                      <input
                        type="email"
                        className="form-control mb-4"
                        required
                      />
                    </InputGroup>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-12">
                    <label className="form-label">State</label>
                    <InputGroup>
                      <input
                        type="text"
                        className="form-control mb-4"
                        required
                      />
                    </InputGroup>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Postal code(optional)</label>
                    <InputGroup>
                      <input
                        type="email"
                        className="form-control mb-4"
                        required
                      />
                    </InputGroup>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-12">
                    <label className="form-label">Phone Number</label>
                    <InputGroup>
                      <input
                        type="text"
                        className="form-control mb-4"
                        required
                      />
                    </InputGroup>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email Address</label>
                    <InputGroup>
                      <input
                        type="email"
                        className="form-control mb-4"
                        required
                      />
                    </InputGroup>
                  </div>
                </div>
                <div>
                  <label className="form-label">Other Notes(optional)</label>
                  <InputGroup>
                    <textarea
                      type="text"
                      className="form-control mb-4 message border-0"
                    ></textarea>
                  </InputGroup>
                </div>
                <Button
                  type="submit"
                  className="form-control submit-button mt-4 mb-5 border-0"
                >
                  Place Order
                </Button>
              </Form>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Checkout;
