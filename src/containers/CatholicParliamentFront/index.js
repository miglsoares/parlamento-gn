import React from 'react'
import BubbleChart from '../../components/BubbleChart'

const CatholicParliamentFront = data => {
  const { data: graphData } = data

  const totalFrenteCatolica = graphData.filter((pessoa) => pessoa.FPC === true);
  const total = graphData.filter((pessoa) => pessoa.cargo === "SENADOR");
  
  return (
    <div className="catholicParliamentFront">
      <div className="graphs">
        <div className="graphItem">
          <BubbleChart width={400} height={500} data={totalFrenteCatolica}/>
        </div>
      </div>
    </div>
  )
}

export default CatholicParliamentFront