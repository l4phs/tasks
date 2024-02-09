import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

export function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Lauren Pham!</p>
            <p>Hello World</p>
            <h2>HTML and CSS</h2>
            <Container>
                <Row>
                    <Col>First Col</Col>
                    <Col> Second Col </Col>
                </Row>
                <Row>
                    <Col>
                        <img
                            src="Megamoid2.jpg"
                            alt="This is a picture of Megamind from the hit dreamworks movie Megamind"
                        />{" "}
                    </Col>
                    <Col> Second Col </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
