import React from "react";
import {Container, Row, Col, Accordion} from "react-bootstrap"

const Faq = () => {
    return (
        <div className="Faq1" id="faq">
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1 data-aos="fade-down" data-aos-duration="200">Hal yang biasa di tanyakan</h1> 
                        <p data-aos="fade-down" data-aos-duration="600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>                 
                    </Col>
                </Row>
                <Row className="row-cols-lg-2  row-cols-1 g-4">
                    <Col data-aos="fade-up-right" data-aos-duratio="400">
                <Accordion>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Tinggal di mana umur berapa</Accordion.Header>
        <Accordion.Body>
            Saya tinggal di semuli raya dengan Nenek saya dan saya berumur 19
            dan orang tua saya berda di Bukit Kemuning Lampung utara
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Col>
    <Col  data-aos="fade-up-left" data-aos-duration="400">
                <Accordion>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Pernah SMA di mana?</Accordion.Header>
        <Accordion.Body>
          Saya SMA di SMA 1 Abung Semuli yang terletak di semuli jaya
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Col>
    <Col data-aos="fade-up-right" data-aos-duratio="600">
                <Accordion>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Keseharian di rumah</Accordion.Header>
        <Accordion.Body>
          Mungkin bantu-bantu orang rumah saja, saya tidak punya pekerjaan yang memiliki gaji tetap
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Col>
    <Col data-aos="fade-up-left" data-aos-duration="600">
                <Accordion>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Apakah sudah punya pasangan</Accordion.Header>
        <Accordion.Body>
          Untuk saat ini belum ada, mungkin besok atau lusa
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Faq;