import React from 'react'
import CongressChart from '../../components/CongressChart'

const TotalCongressViewing = data => {
  const { data: graphData } = data

  const totalDeputados = graphData.filter((pessoa) => pessoa.cargo === "DEPUTADO");

  const totalSenadores = graphData.filter((pessoa) => pessoa.cargo === "SENADOR");

  return (
    <div className="totalCongressViewing">
      <div className="graphs">
        <div className="graphItem">
          <CongressChart width={600} height={300} data={totalDeputados}/>
          <span>513</span>
          <span>deputados federais</span>
        </div>
        <div className="graphItem">
          <CongressChart width={400} height={300} data={totalSenadores} />
          <span>81</span>
          <span>senadores</span>
        </div>
      </div>
    </div>
  )
}

export default TotalCongressViewing