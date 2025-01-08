import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantasyBooks from "../data/fantasy.json";
import { Component } from "react";

class CardsGenerated extends Component {
  state = {
    activeFantasy: fantasyBooks[0],
  };

  bookSelected = (book) => {
    this.setState({ activeFantasy: book });
    console.log("Selected Book:", book);
  };

  render() {
    return (
      <Container className="p-0">
        <Row className="d-flex g-2">
          {fantasyBooks.map((book) => (
            <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="p-1">
              <Card
                style={{ height: "fit-content" }}
                onClick={() => this.bookSelected(book)}
              >
                <Card.Img
                  variant="top"
                  src={book.img}
                  style={{ height: "400px" }}
                />
                <Card.Body className="d-flex flex-column justify-content-between w-100 p-3">
                  <Card.Title style={{height: '80px'}} className="h4 overflow-scroll">{book.title}</Card.Title>
                  <Card.Text className="h2 fw-light">{book.price} $</Card.Text>
                  <Card.Text className="align-self-end"><i>{book.category}</i></Card.Text>
                  <Button variant="primary">Shop Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default CardsGenerated;
