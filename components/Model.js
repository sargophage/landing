import React from 'react';
import { Container, Row, Col } from "reactstrap";


const Model = () => {

    return (
        <section className="section bg-light" id="model">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} md={8}>
                        <div className="title text-center mb-5">
                            <h3 className="font-weight-normal text-dark"><span className="text-warning">How it works?</span></h3>
                            {/* <p className="text-muted">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p> */}
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={6} md={4}>
                        <p className="text-muted font-weight-light">Here is a sneak peek of our Dispersal Model with and without interception: the engine behind Sargowaze forecasts.</p>
                        <div className="title text-center mb-5">
                            <video width="320" height="240" controls className="img-fluid mx-auto d-block">
                                <source src="/images/model.mp4" type="video/mp4" />
                            </video>
                        </div>

                    </Col>
                </Row>

            </Container>
        </section>
    );
}

export default Model;