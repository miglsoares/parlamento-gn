import React from 'react'
import CongressChart from '../../components/CongressChart'

const ThreeFronts = ({totalDeputados, totalSenadores, deputadosWidth, deputadosHeight, senadoresWidth, senadoresHeight}) => {

  const deputadosThreeFronts = totalDeputados.filter((pessoa) => pessoa.FPC === true && pessoa.FPE === true && pessoa.FPMA === true);
  const senadoresThreeFronts = totalSenadores.filter((pessoa) => pessoa.FPC === true && pessoa.FPE === true && pessoa.FPMA === true);

  return (
    <div className="threeFronts">
      <div className="graphs">
        <div className="graphItem">
          <CongressChart width={deputadosWidth} height={deputadosHeight} data={totalDeputados} highlight={deputadosThreeFronts} />
          <div className="spacing"></div>
        </div>
        <div className="graphItem">
          <CongressChart width={senadoresWidth} height={senadoresHeight} data={totalSenadores} highlight={senadoresThreeFronts} />
          <div className="spacing"></div>
        </div>
      </div>
    </div>
  )
}

export default ThreeFronts