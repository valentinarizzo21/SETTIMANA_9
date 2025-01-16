/* eslint-disable react/prop-types */
import SingleBook from "./SingleBook";
import { Container, Row, Form } from "react-bootstrap";
import { useState } from "react";

const BookList = ({ bookList }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Container className="p-0 w-75">
      <Row className="g-2 w-100">
        <Form className="my-5 w-100">
          <Form.Control
            size="lg"
            type="text"
            placeholder="Search your book here!"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        </Form>

        {!inputValue
          ? bookList.map((bk) => <SingleBook key={bk.asin} book={bk} />)
          : bookList
              .filter((book) =>
                book.title.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((bk) => <SingleBook key={bk.asin} book={bk} />)}
      </Row>
    </Container>
  );
};

export default BookList;
