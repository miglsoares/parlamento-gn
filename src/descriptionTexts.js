import React from 'react'

import AfricanParliamentFront from './containers/AfricanParliamentFront ';
import TwoFronts from './containers/TwoFronts';
import ThreeFronts from './containers/ThreeFronts';
import ParticipantReligionFPE from './containers/ParticipantReligionFPE';
import ParticipantReligionFPC from './containers/ParticipantReligionFPC';
import BubbleProjectionGroups from './containers/BubbleProjectionGroups';
import GroupEvangelic from './containers/GroupEvangelic'
import GroupEvangelicWhite from './containers/GroupEvangelicWhite';
import GroupEvangelicWhiteMale from './containers/GroupEvangelicWhiteMale';
import TotalCongressViewing from './containers/TotalCongressViewing';
import ReligiousFronts from './containers/ReligiousFronts';
import EvangelicParliamentFront from './containers/EvangelicParliamentFront';
import CatholicParliamentFront from './containers/CatholicParliamentFront';
import ProjectionGroups from './containers/ProjectionGroups'

import { data } from './data'

const deputados = data.filter((pessoa) => pessoa.cargo === "DEPUTADO");
const senadores = data.filter((pessoa) => pessoa.cargo === "SENADOR");

const totalDeputados = deputados.sort((a, b) => a.partido.localeCompare(b.partido))

const totalSenadores = senadores.sort((a, b) => a.partido.localeCompare(b.partidos))

const windowWidth = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth

const isMobile = windowWidth < 767

const deputadosWidth = isMobile ? 300 : 580
const deputadosHeight = isMobile ? 150 : 300

const senadoresWidth = isMobile ? 150 : 300
const senadoresHeight = isMobile ? 80 : 180

const bubblesWidth = isMobile ? 300 : 600
const bubblesHeight = isMobile ? 250 : 330

const descriptionTexts = [
  {
    step: 1,
    defaultText: 'parlamentares formam o Congresso Nacional',
    descriptionNumber: 594,
    graph: <TotalCongressViewing totalDeputados={totalDeputados} totalSenadores={totalSenadores} deputadosWidth={deputadosWidth} deputadosHeight={deputadosHeight} senadoresWidth={senadoresWidth} senadoresHeight={senadoresHeight} />,
    textColorNumber: '#ffffff',
    paragraph: 'São 513 deputados/as federais e 81 senadores/as que representam os 26 estados e o Distrito Federal.',
    paragraphSecond: 'Entre estes estão parlamentares que estavam fora de exercício na atualização mais recente da pesquisa, mas têm vínculo religioso e/ou assinaram uma das principais frentes religiosas. Estes nomes estão identificados na base com asterisco.',
  },
  {
    step: 2,
    descriptionNumber: 392,
    defaultText: 'assinam as três principais frentes religiosas',
    graph: <ReligiousFronts totalDeputados={totalDeputados} totalSenadores={totalSenadores} deputadosWidth={deputadosWidth} deputadosHeight={deputadosHeight} senadoresWidth={senadoresWidth} senadoresHeight={senadoresHeight} />,
    textColorNumber: '#ffffff',
    textColorSpan: '#ffffff',
    rowImagesNumber: 2,
    imageFPE: 'fpe.svg',
    imageFPEDescription: 'FPE',
    imageFPC: 'fpc.svg',
    imageFPCDescription: 'FPC',
    imageFPMA: 'fpma.svg',
    imageFPMADescription: 'FPTMA',
  },
  {
    step: 3,
    graph: <ReligiousFronts totalDeputados={totalDeputados} totalSenadores={totalSenadores} deputadosWidth={deputadosWidth} deputadosHeight={deputadosHeight} senadoresWidth={senadoresWidth} senadoresHeight={senadoresHeight} />,
    paragraph: 'Frentes Parlamentares são associações de parlamentares, de caráter formal e suprapartidário, cuja finalidade é promover os debates sobre a legislação e políticas públicas referentes a temas de interesse da sociedade. Atualmente, na 56ª Legislatura, o Congresso registra um total de 334 Frentes Parlamentares',
    paragraphSecond: 'As frentes se diferem das bancadas, agrupamentos organizados de parlamentares, de caráter informal e suprapartidário, que representam interesses de um determinado partido, de blocos partidários, região ou grupos de interesses específicos.',
    paragraphThird: 'As bancadas de dois ou mais partidos, sob uma liderança comum, constituem um bloco parlamentar.',
    paragraphFourth: 'A Câmara tem 16 bancadas e um bloco. Já o Senado tem 17 bancadas e 11 blocos.'
  },
  {
    step: 4,
    descriptionNumber: 203,
    defaultText: 'deputados e senadores',
    colorText: 'estão na Frente Parlamentar Evangélica',
    graph: <EvangelicParliamentFront totalDeputados={totalDeputados} totalSenadores={totalSenadores} deputadosWidth={deputadosWidth} deputadosHeight={deputadosHeight} senadoresWidth={senadoresWidth} senadoresHeight={senadoresHeight} />,
    textColorNumber: '#736431',
    textColorSpan: '#736431',
    rowImagesNumber: 1,
    imageFPE: 'fpe.svg',
    imageFPEDescription: 'FPE',
  },
  {
    step: 5,
    graph: <ParticipantReligionFPE totalDeputados={totalDeputados} totalSenadores={totalSenadores} deputadosWidth={deputadosWidth} deputadosHeight={deputadosHeight} senadoresWidth={senadoresWidth} senadoresHeight={senadoresHeight} />,
    defaultText: 'Dentre os signatários, 93 professam a fé evangélica.',
    textColorNumber: '#dcdb52',
    textColorSpan: '#dcdb52',
    paragraphTop: 'Criada em 2004, a FPE obteve 203 assinaturas válidas para registro nesta 56ª Legislatura, sendo 195 deputados federais e 8 senadores.',
  },
  {
    step: 6,
    graph: <CatholicParliamentFront totalDeputados={totalDeputados} totalSenadores={totalSenadores} deputadosWidth={deputadosWidth} deputadosHeight={deputadosHeight} senadoresWidth={senadoresWidth} senadoresHeight={senadoresHeight} />,
    descriptionNumber: 216,
    defaultText: 'deputados e senadores',
    colorText: 'estão na Frente Parlamentar Católica',
    textColorSpan: '#6a8d82',
    textColorNumber: '#6a8d82',
    rowImagesNumber: 1,
    imageFPC: 'fpc.svg',
    imageFPCDescription: 'FPC',
  },
  {
    step: 7,
    graph: <ParticipantReligionFPC totalDeputados={totalDeputados} totalSenadores={totalSenadores} deputadosWidth={deputadosWidth} deputadosHeight={deputadosHeight} senadoresWidth={senadoresWidth} senadoresHeight={senadoresHeight} />,
    defaultText: 'Dos que assinam esta frente, 140 se declaram vinculados ao catolicismo.',
    textColorNumber: '#6a8d82',
    textColorSpan: '#6a8d82',
    paragraphTop: 'A Frente Parlamentar Católica foi instituída em 2015. Nesta 56ª Legislatura, contou com 216 signatários, dentre 207 deputados e 9 senadores.',
  },
  {
    step: 8,
    colorText: 'Frente Parlamentar em Defesa dos Povos Tradicionais de Matriz Africana',
    defaultText: 'compõem a',
    descriptionNumber: 218,
    graph: <AfricanParliamentFront totalDeputados={totalDeputados} totalSenadores={totalSenadores} deputadosWidth={deputadosWidth} deputadosHeight={deputadosHeight} senadoresWidth={senadoresWidth} senadoresHeight={senadoresHeight} />,
    textColorNumber: '#904826',
    textColorSpan: '#904826',
    rowImagesNumber: 1,
    imageFPMA: 'fpma.svg',
    imageFPMADescription: 'FPTMA',
  },
  {
    step: 9,
    graph: <AfricanParliamentFront totalDeputados={totalDeputados} totalSenadores={totalSenadores} deputadosWidth={deputadosWidth} deputadosHeight={deputadosHeight} senadoresWidth={senadoresWidth} senadoresHeight={senadoresHeight} />,
    textSecondary: 'Nenhum dos signatários da Frente professa vinculação com religiões de matriz africana.',
    paragraph: 'A Frente Parlamentar de Defesa dos Povos Tradicionais de Matriz Africana foi criada em 2011 e contou com 218 signatários para a 56a Legislatura, sendo 214 deputados e 4 senadores. Hoje são 219, somando a presidente da Frente.',
    paragraphSecond: 'Enquanto a FPE e a FPC se destacam por declarar sua finalidade religiosa, a relação da FPTMA com as religiões de matriz africana se dá num escopo mais amplo. Por meio de sua base de sustentação fora do Congresso e ao promover a valorização da cultura e a garantia de direitos dos povos tradicionais de matriz africana.',
  },
  {
    step: 10,
    graph: <ThreeFronts totalDeputados={totalDeputados} totalSenadores={totalSenadores} deputadosWidth={deputadosWidth} deputadosHeight={deputadosHeight} senadoresWidth={senadoresWidth} senadoresHeight={senadoresHeight} />,
    descriptionNumber: 41,
    defaultText: 'deputados compõem as três frentes',
    textColorNumber: '#ffffff',
    textColorSpan: '#ffffff',
    rowImagesNumber: 1,
    imageFPE: 'fpe.svg',
    imageFPEDescription: 'FPE',
    imageFPC: 'fpc.svg',
    imageFPCDescription: 'FPC',
    imageFPMA: 'fpma.svg',
    imageFPMADescription: 'FPTMA',
  },
    {
    step: 11,
    graph: <TwoFronts totalDeputados={totalDeputados} totalSenadores={totalSenadores} deputadosWidth={deputadosWidth} deputadosHeight={deputadosHeight} senadoresWidth={senadoresWidth} senadoresHeight={senadoresHeight} />,
    descriptionNumber: 142,
    defaultText: 'estão em ao menos duas delas',
    textColorNumber: '#ffffff',
    textColorSpan: '#ffffff',
    rowImagesNumber: 3,
    imageFPE: 'fpe.svg',
    imageFPEDescription: 'FPE',
    imageFPC: 'fpc.svg',
    imageFPCDescription: 'FPC',
    imageFPMA: 'fpma.svg',
    imageFPMADescription: 'FPTMA',
  },
  {
    step: 12,
    graph: <ProjectionGroups totalDeputados={totalDeputados} totalSenadores={totalSenadores} deputadosWidth={deputadosWidth} deputadosHeight={deputadosHeight} senadoresWidth={senadoresWidth} senadoresHeight={senadoresHeight} />,
    descriptionNumber: 69,
    textColorNumber: '#ffffff',
    defaultText: 'parlamentares se destacam pela alta capacidade de influência, agregação e alcance político nos temas relacionados a religiões. São os "agentes de influência"',
  },
  {
    step: 14,
    graph: <BubbleProjectionGroups totalDeputados={totalDeputados} totalSenadores={totalSenadores} bubblesWidth={bubblesWidth} bubblesHeight={bubblesHeight} />,
    defaultText: 'Agentes de influência',
    paragraph: 'Este grupo foi definido a partir da lista de signatários de cada uma das três frentes religiosas somada a parlamentares não signatários que têm identidade religiosa declarada.',
    paragraphSecond: 'Foi verificada a projeção de cada um deles por atuação parlamentar, calculada a partir de pontuação relacionada a critérios-chave, e por nível de influência política.'
  },
  {
    step: 15,
    graph: <GroupEvangelic totalDeputados={totalDeputados} totalSenadores={totalSenadores} bubblesWidth={bubblesWidth} bubblesHeight={bubblesHeight} />,
    defaultText: 'Eles são principalmente evangélicos',
  },
  {
    step: 16,
    graph: <GroupEvangelicWhite totalDeputados={totalDeputados} totalSenadores={totalSenadores} bubblesWidth={bubblesWidth} bubblesHeight={bubblesHeight} />,
    defaultText: 'Eles são principalmente evangélicos, brancos',
  },
  {
    step: 17,
    graph: <GroupEvangelicWhiteMale totalDeputados={totalDeputados} totalSenadores={totalSenadores} bubblesWidth={bubblesWidth} bubblesHeight={bubblesHeight} />,
    defaultText: 'Eles são principalmente evangélicos, brancos e homens',
  },
]

export default descriptionTexts