import React from 'react'
import CongressChart from '../../components/CongressChart'

const ProjectionGroups = ({totalDeputados, totalSenadores, deputadosWidth, deputadosHeight, senadoresWidth, senadoresHeight}) => {
  const deputadosFE = totalDeputados.filter((pessoa) => pessoa.projecao === true);

  const senadoresFE = totalSenadores.filter((pessoa) => pessoa.projecao === true);
  
  return (
    <div className="projectionGroups">
      <div className="graphs">
        <div className="graphItem">
          <CongressChart width={deputadosWidth} height={deputadosHeight} color="#6a7471" data={totalDeputados} highlight={deputadosFE} />
          <div className="spacing"></div>
        </div>
        <div className="graphItem">
          <CongressChart width={senadoresWidth} height={senadoresHeight} color="#6a7471" data={totalSenadores} highlight={senadoresFE} />
          <div className="spacing"></div>
        </div>
      </div>
    </div>
  )
}

export default ProjectionGroups