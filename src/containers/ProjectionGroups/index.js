import React from 'react'
import BubbleChart from '../../components/BubbleChart';

const ProjectionGroups = data => {
  const { data: graphData } = data

  const totalTresFrentes = graphData.filter((pessoa) => pessoa.FPE === true || pessoa.FPC === true || pessoa.FPMA === true);

  return (
    <div className="projectionGroups">
      <div className="graphs">
        <div className="graphItem">
          <BubbleChart width={500} height={400} data={totalTresFrentes} />
        </div>
        <div className="graphItem">
          <BubbleChart width={500} height={400} data={totalTresFrentes} />
          <span>esses 14 parlamentares não fazem parte de nenhuma das frentes religiosas</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectionGroups