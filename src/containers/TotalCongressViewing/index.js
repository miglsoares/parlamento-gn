import React from 'react'
import CongressChart from '../../components/CongressChart'

import './styles.css';

const TotalCongressViewing = data => {
  const { data: graphData } = data

  const totalDeputados = graphData.filter((pessoa) => pessoa.cargo === "DEPUTADO");
  const totalSenadores = graphData.filter((pessoa) => pessoa.cargo === "SENADOR");

  return (
    <div className="totalCongressViewing">
      <div className="description">
        <span className="descriptionNumber">594</span>
        <p className="descriptionText">parlamentares formam o Congresso Nacional</p>
      </div>
      <div className="graphs">
        <div className="graphItem">
          <CongressChart width={400} height={250} data={totalDeputados}/>
          <span>513</span>
          <span>deputados federais</span>
        </div>
        <div className="graphItem">
          <CongressChart width={400} height={250} data={totalSenadores} />
          <span>81</span>
          <span>senadores</span>
        </div>
      </div>
    </div>
  )
}

export default TotalCongressViewing