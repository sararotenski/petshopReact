import React from 'react'
import Banner from '../components/Banner'
import Servico from '../components/Servico'
import banhoTosa from '../imagens/banho-tosa.jpg'
import vacinaCachorro from '../imagens/vacina-cachorro.jpg'
import adestramento from '../imagens/adestramento.jpg'
import hotelResort from '../imagens/hotel-para-cachorros.jpg'
import Bemvindo from '../components/Bemvindo'

function Home() {
    return (
        <div>

        <main>
          <Banner />
        </main>

            <section className='section d-flex py-4'>
                <Servico imagemServico= { banhoTosa } tituloImagem="banho e tosa para pets" tituloServico="Banho e Tosa"/>
                <Servico imagemServico= { vacinaCachorro } tituloImagem="vacina para cachorros" tituloServico="Pet Care"/>
                <Servico imagemServico= { adestramento } tituloImagem="adestramento para pets" tituloServico="Adestramento"/>
                <Servico imagemServico= { hotelResort } tituloImagem="hotel resort para pets" tituloServico="Hotel Resort"/>
            </section>

            <Bemvindo />

        </div>
    )
}

export default Home