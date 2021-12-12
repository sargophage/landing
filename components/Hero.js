import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Sargowaze</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">Forecasts, monitoring and decision support for
                <span className="text-primary font-weight-medium"> Sargassum</span></h1>
              <p className="text-muted mb-4 pb-2">Sargowaze is an application to measure, monitor, forecast and suport
                the handling of Sargassum beaching</p>
              <a href="#" className="btn btn-warning">
                Find Out How <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/images/Group Members.png" alt="" className="img-fluid mx-auto d-block" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;