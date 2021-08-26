import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Alert, Breadcrumb, Card, Form } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form className="mb-3">
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="example@email.com" />
            <Form.Text className="text-muted">
              We'll never share your email address!
            </Form.Text>
          </Form.Group>
        </Form>

        <Card className="mb-3" style={{ color: "#000" }}>
          <Card.Img src="https://picsum.photos/200/50" />
          <Card.Body>
            <Card.Title>Card Example</Card.Title>
            <Card.Text>This is a bootstrap react card</Card.Text>
            <Button variant="danger">Read more</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test 2</Breadcrumb.Item>
          <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="secondary">Holi</Alert>
        <Button> Test button</Button>
      </header>
    </div>
  );
}

export default App;
