import React from 'react'
import "./Home.css"
import Profile from "../images/Passport_Edward.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <div style={{
            backgroundColor: "#000"
        }}>
            <Container>
                <Row>
                    <Col sm={8}>
                        <div>
                            <div id="console"> </div>
                        </div>
                    </Col>
                    <Col style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }} sm={4}>
                        <div
                            id="image"
                            style={{
                                height: "300px",
                                width: "300px",
                                marginTop: "150px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <img
                                className="img-responsive"
                                src={Profile}
                                style={{
                                    height: "100%",
                                    width: "100%"
                                }}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home