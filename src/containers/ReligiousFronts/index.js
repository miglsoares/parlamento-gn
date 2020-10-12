import React from 'react'
import CongressChart from '../../components/CongressChart'

const ReligiousFronts = ({totalDeputados, totalSenadores, deputadosWidth, deputadosHeight, senadoresWidth, senadoresHeight}) => {

  const deputadosReligiousFronts = totalDeputados.filter((pessoa) => pessoa.FPC === true || pessoa.FPE === true || pessoa.FPMA === true);
  const senadoresReligiousFronts = totalSenadores.filter((pessoa) => pessoa.FPC === true || pessoa.FPE === true || pessoa.FPMA === true);
  
  return (
    <div className="religiousFronts">
      <div className="graphs">
        <div className="graphItem">
          <CongressChart width={deputadosWidth} height={deputadosHeight} data={totalDeputados} highlight={deputadosReligiousFronts} />
          <span>{deputadosReligiousFronts.length} <br/>deputados federais</span>
          <p>(Inclui parlamentares fora de exercício) </p>
        </div>
        <div className="graphItem">
          <CongressChart width={senadoresWidth} height={senadoresHeight} data={totalSenadores} highlight={senadoresReligiousFronts} />
          <span>{senadoresReligiousFronts.length}<br/>senadores</span>
          <p>(Inclui parlamentares fora de exercício) </p>
        </div>
      </div>
    </div>
  )
}

export default ReligiousFronts