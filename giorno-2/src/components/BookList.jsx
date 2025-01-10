/* eslint-disable react/prop-types */
import SingleBook from "./SingleBook";
import { Container, Row, Form } from "react-bootstrap";
import { Component } from "react";

class BookList extends Component {
  state = {
    inputValue: "",
  };

  render() {
    return (
      <Container className="p-0">
        <Row className="g-2 ">
          <Form>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Search your book here!"
              onChange={(e) => {
                this.setState({ inputValue: e.target.value });
              }}
              value={this.state.inputValue}
            />
          </Form>
          {!this.state.inputValue
            ? this.props.bookList.map((bk) => {
                return <SingleBook key={bk.asin} book={bk} />;
              })
            : this.props.bookList
                .filter((book) =>
                  book.title.toLowerCase().includes(this.state.inputValue.toLowerCase())
                )
                .map((bk) => {
                  return <SingleBook key={bk.asin} book={bk} />;
                })
          }
        </Row>
      </Container>
    );
  }
}

export default BookList;

