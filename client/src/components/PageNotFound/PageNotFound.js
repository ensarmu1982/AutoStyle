import React from "react";
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";

const PageNotFound = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>404 Page Not Found</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default PageNotFound;
