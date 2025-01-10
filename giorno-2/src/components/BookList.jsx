/* eslint-disable react/prop-types */
import SingleBook from "./SingleBook";
import { Container, Row } from "react-bootstrap";

const BookList = (props) => {
  return (
    <Container className="p-0">
      <Row className="g-2 ">
        {props.bookList.map((bk) => {
          return <SingleBook key={bk.asin} book={bk} />;
        })}
      </Row>
    </Container>
  );
};

export default BookList;
