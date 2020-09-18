import React from 'react'
import BubbleChart from '../../components/BubbleChart';

const GroupComposition = data => {
  const { data: graphData } = data

  const totalTresFrentes = graphData.filter((pessoa) => pessoa.carreiraParlamentar === 'projeção');

  return (
    <div className="groupComposition">
      <div className="graphs">
        <div className="graphItem">
          <BubbleChart width={500} height={400} data={totalTresFrentes} />
        </div>
      </div>
    </div>
  )
}

export default GroupComposition