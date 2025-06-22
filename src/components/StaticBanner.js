import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import banner from '../imagens/adestramento/banner-adestramento.jpg'

function StaticBanner() {
  return (
      <Container fluid>
            <Row>
                <Col>
                    <img src={ banner } alt='banner adestramento' className='w-100' />
                </Col>
            </Row>
        </Container>
  )
}

export default StaticBanner
