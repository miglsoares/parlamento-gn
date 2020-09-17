import React from 'react'
import BubbleChart from '../../components/BubbleChart'

import './styles.css';

const EvangelicParliamentFront = data => {
  const { data: graphData } = data

  const totalFrenteEvangelica = graphData.filter((pessoa) => pessoa.FPE === true);
  const total = graphData.filter((pessoa) => pessoa.cargo === "SENADOR");
  
  return (
    <div className="evangelicParliamentFront">
      <div className="description">
        <span className="descriptionNumber">197</span>
        <p className="descriptionText">deputados e senadores estão na <span>Frente Parlamentar Evangélica</span></p>
      </div>
      <div className="graphs">
        <div className="graphItem">
          <BubbleChart width={400} height={500} data={totalFrenteEvangelica}/>
        </div>
      </div>
    </div>
  )
}

export default EvangelicParliamentFront