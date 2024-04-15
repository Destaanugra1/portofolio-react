import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeIt from "typeit-react";
import Sgri from "../assets/img/mentahan/pngwing.com.png"
import 'animate.css';

const HomeComp = () => {

    return (
        <div id='Home' className="intro ">
            <Container className='conten justify-content-center align-items-center'>
                <Row className=''>
                    <Col md={8} className='saya flex-center' >
                        <div className='title text-white g-lg-5'>  <TypeIt
                            options={{
                                strings: ["Desta Anugra Pratama"],
                                speed: 100,
                                waitUntilVisible: true,
                            }}
                        /></div>
                        <p className='text-white-50 mt-2 animate__animated animate__backInUp animate__delay-2s'>Hai saya Desta biasa di panggil Des saya kuliah di UMKO <p>Saya sebagai junior Dev dan
                        dan ingin belajar menjadi, Developer web</p></p>
                    </Col>
                    <Col md={4} className='ini md-5 ml-5 '>
                        <div className='gambar flex-end '>
                            <img src={Sgri} className="sagiri float-right flex-end" alt="Responsive image" /> 
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeComp;