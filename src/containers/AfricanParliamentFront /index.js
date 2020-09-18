import React from 'react'
import BubbleChart from '../../components/BubbleChart'

const AfricanParliamentFront = data => {
  const { data: graphData } = data

  const totalFrenteMatrizAfricana = graphData.filter((pessoa) => pessoa.FPMA === true);
  const total = graphData.filter((pessoa) => pessoa.cargo === "SENADOR");
  
  return (
    <div className="africanParliamentFront">
      <div className="graphs">
        <div className="graphItem">
          <BubbleChart width={400} height={500} data={totalFrenteMatrizAfricana}/>
        </div>
      </div>
    </div>
  )
}

export default AfricanParliamentFront