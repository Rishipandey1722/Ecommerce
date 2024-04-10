import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <h2 className="text-center mb-4">About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo mauris. Fusce scelerisque quam eget aliquet varius. Nullam varius consequat tortor, in vehicula elit. Nulla facilisi. Aenean posuere, justo at efficitur mollis, purus nulla condimentum sem, nec pulvinar quam sem id leo. Vestibulum sollicitudin orci eget accumsan dictum. Aliquam erat volutpat. Mauris venenatis velit quis urna efficitur consequat. Suspendisse potenti.</p>
          <p>Donec vel dui eget sapien ultrices convallis. Sed auctor nunc vel magna fermentum consectetur. Duis ut nunc sed mauris placerat tristique. Integer malesuada libero id quam volutpat, et fermentum leo suscipit. Morbi ut interdum ligula. Cras rhoncus nisl nec ex finibus fringilla.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
