import { Container, Row } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";


function MyAlert() {
  return (
    <Container className="my-5">
      <Row>
        <Alert variant="primary">
          <Alert.Heading>Hey, nice to see you again!</Alert.Heading>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum corporis quam esse, accusantium, totam iusto fuga porro pariatur ullam dolor rem quaerat ab placeat, animi amet numquam! Ex, provident dignissimos?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi perferendis asperiores odit eaque? Enim at est assumenda illo cupiditate exercitationem debitis delectus omnis culpa, dolore harum totam tenetur cum?
          </p>
          <hr />
          <h4 className="mb-0">
            Courious to see the offers? Don&apos;t hesitate and click here!
          </h4>
          <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-warning my-2">See Offers!</button>
          </div>
        </Alert>
      </Row>
    </Container>
  );
}

export default MyAlert;
