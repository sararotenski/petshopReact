import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import banner from '../imagens/adestramento/banner-adestramento.jpg'
import adestramento1 from '../imagens/adestramento/adestramento1.jpg'
import adestramento2 from '../imagens/adestramento/adestramento2.jpg'
import adestramento3 from '../imagens/adestramento/adestramento3.jpg'
import adestramento4 from '../imagens/adestramento/adestramento4.jpg'
import adestramento5 from '../imagens/adestramento/adestramento5.jpg'


function Adestramento() { // w = width

    const photos = [
        {
            id: 1,
            title: 'Imagem de Adestramento',
            url: `${ adestramento1 }` //interpolação
        },
        {
            id: 2,
            title: 'Imagem de Adestramento',
            url: `${ adestramento2 }` //interpolação
        },
        {
            id: 3,
            title: 'Imagem de Adestramento',
            url: `${ adestramento3 }` //interpolação
        },
        {
            id: 4,
            title: 'Imagem de Adestramento',
            url: `${ adestramento4 }` //interpolação
        },
        {
            id: 5,
            title: 'Imagem de Adestramento',
            url: `${ adestramento5 }` //interpolação
        }
    ]

    return (
        <>
        <Container fluid>
            <Row>
                <Col>
                    <img src={ banner } alt='banner adestramento' className='w-100' />
                </Col>
            </Row>
        </Container>

        <Container>
            <Row className='py-5'>
                <Col>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida elit non porta egestas. Proin ultrices lectus sed sollicitudin egestas. Fusce auctor dolor turpis, at porta arcu laoreet id. Nulla.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales ultricies vestibulum. Praesent tristique odio urna, sit amet fringilla neque tincidunt nec. Fusce eu odio ut quam pretium dictum. Proin.</p>
                </Col>

                <Col className='photos'>
                    {
                        photos.map( () => (
                            <div key={photos.id}>
                                <img src={ photos.url } alt={ photos.title } />
                            </div>
                        ))
                    }
                </Col>
                <Col>
                
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Adestramento