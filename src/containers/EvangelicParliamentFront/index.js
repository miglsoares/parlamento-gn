import React from 'react'
import CongressChart from '../../components/CongressChart'

const EvangelicParliamentFront = ({totalDeputados, totalSenadores, deputadosWidth, deputadosHeight, senadoresWidth, senadoresHeight}) => {
  const deputadosFE = totalDeputados.filter((pessoa) => pessoa.FPE === true);
  const senadoresFE = totalSenadores.filter((pessoa) => pessoa.FPE === true);
  
  return (
    <div className="evangelicParliamentFront">
      <div className="graphs">
        <div className="graphItem">
          <CongressChart width={deputadosWidth} height={deputadosHeight} color="#736431" data={totalDeputados} highlight={deputadosFE} />
          <div className="spacing"></div>
        </div>
        <div className="graphItem">
          <CongressChart width={senadoresWidth} height={senadoresHeight} color="#736431" data={totalSenadores} highlight={senadoresFE} />
          <div className="spacing"></div>
        </div>
      </div>
    </div>
  )
}

export default EvangelicParliamentFront