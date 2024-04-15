import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import django from "../assets/img/mentahan/djnago.png"
import samaAja from '../assets/img/mentahan/ke-2.png'
import ecom from '../assets/img/mentahan/ecom.jpg'
import proto from '../assets/img/mentahan/Screenshot (55).png'
import admin from '../assets/img/mentahan/admin.jpg'
import anim from '../assets/img/mentahan/next.jpg'
import AOS from 'aos';

const Project = () => {
    return (
        <div className="" id='project' >
            <Container>
            <br />
            <h1 className='text-dark fw-bold'>MY Project</h1>
            
                <Row>
                    <Col md={4} className='ProjectWrapper1 ' data-aos="fade-up">
                        <Card className="bg-dark text-white text-center projectImage ">
                            <Image
                                src={samaAja}
                                alt="Project1"
                                className='images row-cols-lg-2 row-cols-md-2 row-cols-1 g-4'
                            />
                            <Card.Title className="text-center">Project Pertama React</Card.Title>
                            <Card.Text className="text-left">
                                Project ini sangat Responsive dengan menggunakan React JS, Bootstrap, CSS, HTML, Javascript, 
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className='ProjectWrapper' data-aos="fade-up" data-aos-duration="200">
                        <Card className="bg-dark text-white text-center projectImage ">
                            <Image
                                src={django}
                                alt="Project1"
                                className='images row-cols-lg-2 row-cols-md-2 row-cols-1 g-4'
                            />
                            <Card.Title className="text-center">Project dengan Django</Card.Title>
                            <Card.Text className="text-left">
                                DI project ini sangat sulit di karenakan membuat web dengan python, dan sangat sedikit
                                tutorial yang ada dari Indonesia project ini stuck di bagian styling Admin
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className='ProjectWrapper'  data-aos="fade-up" data-aos-duration="400">
                        <Card className="bg-dark text-white text-center projectImage ">
                            <Image
                                src={ecom}
                                alt="Project1"
                                className='images row-cols-lg-2 row-cols-md-2 row-cols-1 g-4'
                            />
                            <Card.Title className="text-center">Project E-commers</Card.Title>
                            <Card.Text className="text-left">
                                Ini project pertama saya buat toko online sederhana dengan python, yang menggunkan
                                framework Flask
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className='ProjectWrapper'  data-aos="fade-up" data-aos-duration="600">
                        <Card className="bg-dark text-white text-center projectImage ">
                            <Image
                                src={proto}
                                alt="Project1"
                                className='images row-cols-lg-2 row-cols-md-2 row-cols-1 g-4'
                            />
                            <Card.Title className="text-center">Portofolio</Card.Title>
                            <Card.Text className="text-left">
                                Ini adalah portofolio pertama saya yang menggunkana HTML CSS saja,
                                di sini saya hanya merubah foto dan vidio saja tanpa membuat code 
                                dari awal, saya hanya merubah saja. 
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className='ProjectWrapper'  data-aos="fade-up" data-aos-duration="800">
                        <Card className="bg-dark text-white text-center projectImage ">
                            <Image
                                src={admin}
                                alt="Project1"
                                className='images row-cols-lg-2 row-cols-md-2 row-cols-1 g-4'
                            />
                            <Card.Title className="text-center">Admin</Card.Title>
                            <Card.Text className="text-left">
                                Ini adalah admin django yang saya stuck 
                                saya tidak bisa membuat django sendiri, saya hanya mengikuti pengajar saja, dan hanya paham
                                bagian membuat struktur baru di adminya saja.
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className='ProjectWrapper mb-1'  data-aos="fade-up" data-aos-duration="1000">
                        <Card className="bg-dark text-white text-center projectImage ">
                            <Image
                                src={anim}
                                alt="Project1"
                                className='images row-cols-lg-2 row-cols-md-2 row-cols-1 g-4'
                            />
                            <Card.Title className="text-center">Web Anim</Card.Title>
                            <Card.Text className="text-left">
                                Web ini hanya berisi dokumentasi anim dan video spoiler anim itu sendiri, ini menggunkan next.js,
                                project ini stuck dulu karena laptop tiba-tiba mati dan rusak, ingin lanjut folder sudah tidak ada
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Project;