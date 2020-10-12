import React from 'react'
import CongressChart from '../../components/CongressChart'

const CatholicParliamentFront = ({totalDeputados, totalSenadores, deputadosWidth, deputadosHeight, senadoresWidth, senadoresHeight}) => {
  const deputadosFC = totalDeputados.filter((pessoa) => pessoa.FPC === true);
  const senadoresFC = totalSenadores.filter((pessoa) => pessoa.FPC === true);
  
  return (
    <div className="catholicParliamentFront">
      <div className="graphs">
        <div className="graphItem">
          <CongressChart width={deputadosWidth} height={deputadosHeight} color="#6a8d82" data={totalDeputados} highlight={deputadosFC} />
          <div className="spacing"></div>

        </div>
        <div className="graphItem">
          <CongressChart width={senadoresWidth} height={senadoresHeight} color="#6a8d82" data={totalSenadores} highlight={senadoresFC} />
          <div className="spacing"></div>

        </div>
      </div>
    </div>
  )
}

export default CatholicParliamentFront