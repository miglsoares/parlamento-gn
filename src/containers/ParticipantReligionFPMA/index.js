import React from 'react'
import BubbleChart from '../../components/BubbleChart';

const ParticipantReligionFPMA = data => {
  const { data: graphData } = data

  const totalEvangelicos = graphData.filter((pessoa) => pessoa.FPMA === true && pessoa.confessionalidade2 === 'Evangélico');

  const totalCatolicos = graphData.filter((pessoa) => pessoa.FPMA === true && pessoa.confessionalidade === 'Católica');

  const totalOutrasReligioes = graphData.filter((pessoa) => pessoa.FPMA === true && pessoa.confessionalidade !== 'Católica');

  return (
    <div className="participantReligionFPMA">
      <div className="graphs">
        <div className="graphItem">
          <BubbleChart width={400} height={400} data={totalEvangelicos} />
          <span>17%</span>
          <span>são evangélicos</span>
        </div>
        <div className="graphItem">
          <BubbleChart width={400} height={400} data={totalCatolicos} />
          <span>63%</span>
          <span>são católicos</span>
        </div>
        <div className="graphItem">
          <BubbleChart width={400} height={400} data={totalOutrasReligioes} />
          <span>10%</span>
          <span>outras religiões</span>
        </div>
      </div>
    </div>
  )
}

export default ParticipantReligionFPMA