import React from 'react'
import CongressChart from '../../components/CongressChart'

const TotalCongressViewing = ({totalDeputados, totalSenadores, deputadosWidth, deputadosHeight, senadoresWidth, senadoresHeight}) => {

  return (
    <div className="totalCongressViewing">
      <div className="graphs">
        <div className="graphItem">
          <CongressChart width={deputadosWidth} height={deputadosHeight} data={totalDeputados}/>
          <span>531<br/> deputados federais</span>
          <p>(Inclui parlamentares fora de exercício) </p>
        </div>
        <div className="graphItem">
          <CongressChart width={senadoresWidth} height={senadoresHeight} data={totalSenadores} />
          <span>82<br/> senadores</span>
          <p>(Inclui parlamentares fora de exercício) </p>
        </div>
      </div>
    </div>
  )
}

export default TotalCongressViewing