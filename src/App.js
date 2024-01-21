import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Container className="container" fluid>
				<Row>
					<Col md={6} sm={12}>
						<Row>
							<Col className="p-2">
								<Button variant="secondary" size="lg">
									Q
								</Button>
							</Col>
							<Col className="p-2">
								<Button variant="secondary" size="lg">
									W
								</Button>
							</Col>
							<Col className="p-2">
								<Button variant="secondary" size="lg">
									E
								</Button>
							</Col>
						</Row>
						<Row>
							<Col className="p-2">
								<Button variant="secondary" size="lg">
									A
								</Button>
							</Col>
							<Col className="p-2">
								<Button variant="secondary" size="lg">
									S
								</Button>
							</Col>
							<Col className="p-2">
								<Button variant="secondary" size="lg">
									D
								</Button>
							</Col>
						</Row>
						<Row>
							<Col className="p-2">
								<Button variant="secondary" size="lg">
									Z
								</Button>
							</Col>
							<Col className="p-2">
								<Button variant="secondary" size="lg">
									X
								</Button>
							</Col>
							<Col className="p-2">
								<Button variant="secondary" size="lg">
									C
								</Button>
							</Col>
						</Row>
					</Col>
					<Col md={6} sm={12}>
						<Col>but</Col>
						<Col>but</Col>
						<Col>but</Col>
						<Col>but</Col>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
