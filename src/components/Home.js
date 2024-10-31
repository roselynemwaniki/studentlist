import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Home({ students }) {
  return (
    <Container className="mt-4">
      <Row>
        {students.map(student => (
          <Col key={student.id} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={student.image} alt={student.name} />
              <Card.Body>
                <Card.Title>{student.name}</Card.Title>
                <Card.Text>Age: {student.age}</Card.Text>
                <Card.Text>Course: {student.course}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;