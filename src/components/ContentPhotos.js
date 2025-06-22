import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import adestramento1 from '../imagens/adestramento/adestramento1.jpg'
import adestramento2 from '../imagens/adestramento/adestramento2.jpg'
import adestramento3 from '../imagens/adestramento/adestramento3.jpg'
import adestramento4 from '../imagens/adestramento/adestramento4.jpg'
import adestramento5 from '../imagens/adestramento/adestramento5.jpg'

function ContentPhotos() {

  return (
    <>
    <Container>
            <Row className='py-5'>
                <Col>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida elit non porta egestas. Proin ultrices lectus sed sollicitudin egestas. Fusce auctor dolor turpis, at porta arcu laoreet id. Nulla.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales ultricies vestibulum. Praesent tristique odio urna, sit amet fringilla neque tincidunt nec. Fusce eu odio ut quam pretium dictum. Proin.</p>
                </Col>
            </Row>
    </Container>

    <Container className="photos">
        <Row className="d-flex g-0" style={{ padding: '0px' }}>
            <Col className="p-1 m-0"><img  src={ adestramento1 } className="img-fluid" alt="adestramento 1" /></Col>
            <Col className="p-1 m-0"><img  src={ adestramento2 } className="img-fluid" alt="adestramento 2" /></Col>
            <Col className="p-1 m-0"><img  src={ adestramento3 } className="img-fluid" alt="adestramento 3" /></Col>
            <Col className="p-1 m-0"><img  src={ adestramento4 } className="img-fluid" alt="adestramento 4" /></Col>
            <Col className="p-1 m-0"><img  src={ adestramento5 } className="img-fluid" alt="adestramento 5" /></Col>
        </Row>
    </Container>
    </>    
  )
}

export default ContentPhotos
