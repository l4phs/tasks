import React from "react";
import "./App.css";
import Megamoid2 from "./Megamoid2.png";
import { Container, Row, Col, Button } from "react-bootstrap";

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
                            src={Megamoid2}
                            alt="This is a picture of Megamind from the hit dreamworks movie Megamind"
                        />{" "}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={() => console.log("Hello World!")}>
                            {" "}
                            Log Hello World
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{ backgroundColor: "red" }}>
                            <span style={{ color: "red" }}> Rectangle 1 </span>
                        </div>
                    </Col>
                    <Col>
                        <div style={{ backgroundColor: "red" }}>
                            <span style={{ color: "red" }}> Rectangle 2 </span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ol>
                            <li>One</li>
                            <li>Two</li>
                            <li>Three</li>
                            <li>Four</li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
