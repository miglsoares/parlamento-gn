import React from 'react';
import ReactDOM from 'react-dom';

import TotalCongressViewing from './containers/TotalCongressViewing';
import ReligiousFronts from './containers/ReligiousFronts';
import EvangelicParliamentFront from './containers/EvangelicParliamentFront';
import CatholicParliamentFront from './containers/CatholicParliamentFront';

import { data } from './data';
import './styles.css';
import AfricanParliamentFront from './containers/AfricanParliamentFront ';
import GroupComposition from './containers/GroupComposition';
import ParticipantReligionFPE from './containers/ParticipantReligionFPE';
import ParticipantReligionFPC from './containers/ParticipantReligionFPC';
import ParticipantReligionFPMA from './containers/ParticipantReligionFPMA';
import ReligiousDebate from './containers/ReligiousDebate'
import GroupEvangelic from './containers/GroupEvangelic'
import GroupEvangelicWhite from './containers/GroupEvangelicWhite';
import GroupEvangelicWhiteMale from './containers/GroupEvangelicWhiteMale';

ReactDOM.render(
  <React.StrictMode>
    <TotalCongressViewing data={data} />
    <ReligiousFronts data={data} />
    <EvangelicParliamentFront data={data} />
    <CatholicParliamentFront data={data} />
    <AfricanParliamentFront data={data} />
    <GroupComposition data={data} />
    <ParticipantReligionFPE data={data} />
    <ParticipantReligionFPC data={data} />
    <ParticipantReligionFPMA data={data} />
    <ReligiousDebate data={data} />
    <GroupComposition data={data} />
    <GroupEvangelic data={data} />
    <GroupEvangelicWhite data={data} />
    <GroupEvangelicWhiteMale data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

