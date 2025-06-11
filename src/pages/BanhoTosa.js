import React from 'react'
import Rotulo from '../components/Rotulo'
import ContentImgLeft from '../components/ContentImgLeft'
import banhoTosa from "../imagens/imagens-banho-e-tosa/banho-tosa.jpg"

function BanhoTosa() {
    return (
        <div>
            <Rotulo rotulo='Banho e Tosa' />

            <ContentImgLeft imagem={ banhoTosa } textoImagem='Foto de banho e tosa' titulo='Cuidados com o seu pet' texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis tincidunt urna, vel aliquet orci venenatis vel. Ut tempus venenatis posuere. Nulla vulputate fermentum purus, ut mollis ipsum hendrerit at. Aliquam erat volutpat. Ut non sagittis arcu, in convallis purus. Aliquam ut ultrices lorem, nec aliquet risus. Nam molestie volutpat varius. Aliquam consectetur leo non bibendum sollicitudin. Fusce vitae tempus lacus. Morbi id pharetra lacus, bibendum elementum arcu. Maecenas velit augue, pulvinar vel condimentum quis, sagittis eget mi. Etiam odio sapien, maximus non massa eu, imperdiet maximus sapien. Vivamus suscipit massa vel augue accumsan, vitae pharetra urna auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce et leo sit amet nisi tempus tempor. Mauris lobortis pretium erat ac tristique. Suspendisse et tortor et tellus dignissim ultrices sit amet vel leo. Vivamus mollis sem lorem, eget condimentum velit sagittis eu. Donec ornare, enim vel ornare rhoncus, dolor nunc tincidunt sem, at consequat diam lorem eu turpis. In erat orci, dignissim venenatis mauris id, tempor sodales magna. Praesent eget ligula ac lectus finibus elementum.' />
        </div>
    )
}

export default BanhoTosa