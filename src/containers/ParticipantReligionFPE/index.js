import React from 'react'
import BubbleChart from '../../components/BubbleChart';

const ParticipantReligionFPE = data => {
  const { data: graphData } = data

  const totalCatolicos = graphData.filter((pessoa) => pessoa.FPE === true && pessoa.confessionalidade === 'Católica');

  const totalEvangelicos = graphData.filter((pessoa) => pessoa.FPE === true && pessoa.confessionalidade2 === 'Evangélico');

  const totalOutrasReligioes = graphData.filter((pessoa) => pessoa.FPE === true && pessoa.confessionalidade2 !== 'Evangélico');

  return (
    <div className="participantReligionFPE">
      <div className="graphs">
        <div className="graphItem">
          <BubbleChart width={500} height={400} data={totalEvangelicos} />
          <span>47%</span>
          <span>são evangélicos</span>
        </div>
        <div className="graphItem">
          <BubbleChart width={500} height={400} data={totalCatolicos} />
          <span>43%</span>
          <span>são católicos</span>
        </div>
        <div className="graphItem">
          <BubbleChart width={500} height={400} data={totalOutrasReligioes} />
          <span>10%</span>
          <span>outras religiões</span>
        </div>
      </div>
    </div>
  )
}

export default ParticipantReligionFPE