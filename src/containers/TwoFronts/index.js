import React from 'react'
import CongressChart from '../../components/CongressChart'

const TwoFronts = ({totalDeputados, totalSenadores, deputadosWidth, deputadosHeight, senadoresWidth, senadoresHeight}) => {

  const deputadosTwoFronts = totalDeputados.filter((pessoa) => pessoa.FPC === true && pessoa.FPE === true || pessoa.FPC === true && pessoa.FPMA === true);
  const senadoresTwoFronts = totalSenadores.filter((pessoa) => pessoa.FPC === true && pessoa.FPE === true && pessoa.FPMA === true);

  return (
    <div className="twoFronts">
      <div className="graphs">
        <div className="graphItem">
          <CongressChart width={deputadosWidth} height={deputadosHeight} data={totalDeputados} highlight={deputadosTwoFronts} />
          <div className="spacing"></div>
        </div>
        <div className="graphItem">
          <CongressChart width={senadoresWidth} height={senadoresHeight} data={totalSenadores} highlight={senadoresTwoFronts} />
          <div className="spacing"></div>
        </div>
      </div>
    </div>
  )
}

export default TwoFronts