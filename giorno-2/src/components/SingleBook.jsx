/* eslint-disable react/prop-types */
import { Component } from "react";
import { Card, Button, Col, Container, Row } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    return (
      <Container className="p-0">
        <Row className="d-flex g-2">
          <Col
            key={this.props.book.asin}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="p-1"
          >
            <Card style={{ height: "fit-content" }}>
              <Card.Img
                variant="top"
                src={this.props.book.img}
                style={{ height: "400px" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between w-100 p-3">
                <Card.Title
                  style={{ height: "80px" }}
                  className="h4 overflow-scroll"
                >
                  {this.props.book.title}
                </Card.Title>
                <Card.Text className="h2 fw-light">
                  {this.props.book.price} $
                </Card.Text>
                <Card.Text className="align-self-end">
                  <i>{this.props.book.category}</i>
                </Card.Text>
                <Button variant="primary">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SingleBook;
