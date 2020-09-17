import React from 'react'
import BubbleChart from '../../components/BubbleChart'

import './styles.css';

const CatholicParliamentFront = data => {
  const { data: graphData } = data

  const totalFrenteCatolica = graphData.filter((pessoa) => pessoa.FPC === true);
  const total = graphData.filter((pessoa) => pessoa.cargo === "SENADOR");
  
  return (
    <div className="catholicParliamentFront">
      <div className="description">
        <span className="descriptionNumber">208</span>
        <p className="descriptionText">fazem parte da
        <br/>
        <span>Frente Parlamentar Católica</span></p>
      </div>
      <div className="graphs">
        <div className="graphItem">
          <BubbleChart width={400} height={500} data={totalFrenteCatolica}/>
        </div>
      </div>
    </div>
  )
}

export default CatholicParliamentFront