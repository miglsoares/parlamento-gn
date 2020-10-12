import React from 'react'
import CongressChart from '../../components/CongressChart'

const AfricanParliamentFront = ({totalDeputados, totalSenadores, deputadosWidth, deputadosHeight, senadoresWidth, senadoresHeight}) => {
  const deputadosFMA = totalDeputados.filter((pessoa) => pessoa.FPMA === true);
  const senadoresFMA = totalSenadores.filter((pessoa) => pessoa.FPMA === true);
  
  return (
    <div className="africanParliamentFront">
      <div className="graphs">
        <div className="graphItem">
          <CongressChart width={deputadosWidth} height={deputadosHeight} color="#904826" data={totalDeputados} highlight={deputadosFMA} />
          <div className="spacing"></div>
        </div>
        <div className="graphItem">
          <CongressChart width={senadoresWidth} height={senadoresHeight} color="#904826" data={totalSenadores} highlight={senadoresFMA} />
          <div className="spacing"></div>
        </div>
      </div>
    </div>
  )
}

export default AfricanParliamentFront