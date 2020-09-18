import React from 'react'

import AfricanParliamentFront from './containers/AfricanParliamentFront ';
import GroupComposition from './containers/GroupComposition';
import ParticipantReligionFPE from './containers/ParticipantReligionFPE';
import ParticipantReligionFPC from './containers/ParticipantReligionFPC';
import ParticipantReligionFPMA from './containers/ParticipantReligionFPMA';
import ReligiousDebate from './containers/ReligiousDebate'
import GroupEvangelic from './containers/GroupEvangelic'
import GroupEvangelicWhite from './containers/GroupEvangelicWhite';
import GroupEvangelicWhiteMale from './containers/GroupEvangelicWhiteMale';
import TotalCongressViewing from './containers/TotalCongressViewing';
import ReligiousFronts from './containers/ReligiousFronts';
import EvangelicParliamentFront from './containers/EvangelicParliamentFront';
import CatholicParliamentFront from './containers/CatholicParliamentFront';
import ProjectionGroups from './containers/ProjectionGroups'


import { data } from './data'

const descriptionTexts = [
  {
    step: 1,
    defaultText: 'parlamentares formam o Congresso Nacional',
    descriptionNumber: 594,
    graph: <TotalCongressViewing data={data} />,
    textColorNumber: '#dcdb52'
  },
  {
    step: 2,
    descriptionNumber: 396,
    defaultText: 'estão presentes nas três principais frentes religiosas',
    paragraph: 'Atentar para a existência de frentes e bancadas no parlamento, e a diferença entre ela, contribui para a compreensão do dinamismo das propostas e dos interesses que disputam espaço na agenda política. Um elemento importante para se compreender a dinâmica de formação das frentes, é que parlamentares assinam a lista de membros de muitas delas, mesmo que não tenham ligação com o tema específico ou a área de atuação temática, nem pretendam ter. Importa considerar a imposição regimental da composição com um terço dos parlamentares, o que leva parlamentares a integrarem uma frente em processo de coleta de assinaturas, tendo em vista que necessitarão desse mesmo apoio quando decidirem liderar a criação de uma frente de seu interesse. No caso das frentes com identidade religiosa, são vários os signatários que não têm vínculo com a confissão religiosa tematizada, mas aderem ao grupo seja por afinidade, seja para facilitar a existência da articulação. Já as bancadas são os agrupamento organizados dos parlamentares de uma mesma representação partidária ou em blocos partidários.',
    graph: <ReligiousFronts data={data} />,
    textColorNumber: '#ffffff',
    textColorSpan: '#ffffff',
  },
  {
    step: 3,
    descriptionNumber: 197,
    defaultText: 'deputados e senadores estão na ',
    colorText: 'Frente Parlamentar Evangélica',
    graph: <EvangelicParliamentFront data={data} />,
    textColorNumber: '#dcdb52',
    textColorSpan: '#dcdb52',
  },
  {
    step: 4,
    graph: <CatholicParliamentFront data={data} />,
    descriptionNumber: 208,
    defaultText: 'fazem parte da',
    colorText: 'Frente Parlamentar Católica',
    textColorSpan: '#6aac99',
    textColorNumber: '#6aac99'
  },
  {
    step: 5,
    colorText: 'Frente Parlamentar em Defesa dos Povos de Matriz Africana',
    defaultText: 'compôem a',
    descriptionNumber: 215,
    graph: <AfricanParliamentFront data={data} />,
    textColorNumber: '#dd6452',
    textColorSpan: '#dd6452',
  },
  {
    step: 6,
    graph: <GroupComposition data={data} />,
    descriptionNumber: 69,
    defaultText: 'deles se destacam pela alta capacidade de influência e alcance nos temas relacionados.',
    colorText: 'Aqui, chamamos de grupo com projeção.',
    textColorNumber: '#ffffff',
    textColorSpan: '#ffffff',
  },
  {
    step: 7,
    graph: <ParticipantReligionFPE data={data} />,
    defaultText: 'A religião dos participantes da ',
    colorText: 'Frente Parlamentar Evangélica',
    textColorNumber: '#dcdb52',
    textColorSpan: '#dcdb52',
  },
  {
    step: 8,
    graph: <ParticipantReligionFPC data={data} />,
    defaultText: 'A religião dos participantes da ',
    colorText: 'Frente Parlamentar Católica',
    textColorNumber: '#6aac99',
    textColorSpan: '#6aac99',
  },
  {
    step: 9,
    graph: <ParticipantReligionFPMA data={data} />,
    defaultText: 'A religião dos participantes da ',
    colorText: 'Frente Parlamentar em Defesa dos Povos de Matriz Africana',
    textColorSpan: '#dd6452',
  },
  {
    step: 10,
    graph: <ReligiousDebate data={data} />,
    defaultText: 'Junto a estes 396 deputados e senadores, há outros 14 parlamentares que pautam o debate religioso no Congresso Nacional',
  },
  {
    step: 11,
    graph: <ProjectionGroups data={data} />,
    defaultText: 'Junto a estes 396 deputados e senadores, há outros 14 parlamentares que pautam o debate religioso no Congresso Nacional',
  },
  {
    step: 12,
    graph: <GroupEvangelic data={data} />,
    defaultText: 'Eles são principalmente evangélicos',
  },
  {
    step: 13,
    graph: <GroupEvangelicWhite data={data} />,
    defaultText: 'Eles são principalmente evangélicos brancos',
  },
  {
    step: 14,
    graph: <GroupEvangelicWhiteMale data={data} />,
    defaultText: 'Eles são principalmente evangélicos brancos homens',
  },
]

export default descriptionTexts