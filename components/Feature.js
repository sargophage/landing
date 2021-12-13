import React from 'react';
import { Container, Row, Col } from "reactstrap";

const FeatureBox = (props) => {
  return (
    <>
      {
        props.features.map((feature, key) =>
          (feature.id % 2 !== 0) ?
            <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
              <Col md={5} >
                <div>
                  <img src={feature.img} alt="" className="img-fluid d-block mx-auto" />
                </div>
              </Col>
              <Col md={{ size: 6, offset: 1 }}>
                <div className="mt-5 mt-sm-0 mb-4">
                  <div className="my-4">
                    <i className={feature.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                  <p className="text-muted mb-3 f-15">{feature.desc}</p>
                  {/* <a href={feature.link} className="f-16 text-warning">Read More <span className="right-icon ml-2">&#8594;</span></a> */}
                </div>
              </Col>
            </Row>
            :
            <Row key={key} className="align-items-center mt-5">
              <Col md={6}>
                <div className="mb-4">
                  <div className="my-4">
                    <i className="mdi mdi-account-group"></i>
                  </div>
                  <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                  <p className="text-muted mb-3 f-15">{feature.desc}</p>
                  {/* <a href={feature.link} className="f-16 text-warning">Read More <span className="right-icon ml-2">&#8594;</span></a> */}
                </div>
              </Col>
              <Col md={{ size: 5, offset: 1 }} className="mt-5 mt-sm-0">
                <div>
                  <img src={feature.img} alt="" className="img-fluid d-block mx-auto" />
                </div>
              </Col>
            </Row>
        )
      }
    </>
  );
}

const Feature = () => {

  const features = [
    { id: 1, img: "./images/undraw_weather_re_qsmd.svg", title: "Long term forecast", desc: "Our state of the art prediction model beats the current 5 days prediction forecasts", link: "/" },
    { id: 2, img: "./images/undraw_community_re_cyrm.svg", title: "Community", desc: "The data (smell, quantity, photo and description) is verified by the community", link: "/" },
    { id: 3, img: "./images/undraw_relaxation_-1-_wbr7.svg", title: "Plan & Relax", desc: "Plan accordingly based on our Sargassum forecasts", link: "/" },
    // { id: 3, img: "./images/undraw_data_re_80ws.svg", title: "Data", desc: "All the data aggregated in one place", link: "/" },
  ];

  return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Features</span></h3>
              {/* <p className="text-muted">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p> */}
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />

        <Row className="justify-content-center">
          <Col lg={6} md={8}>
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

export default Feature;
