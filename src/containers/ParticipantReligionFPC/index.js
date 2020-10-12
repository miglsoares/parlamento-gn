import React from 'react'
import CongressChart from '../../components/CongressChart';

const ParticipantReligionFPC = ({totalDeputados, totalSenadores, deputadosWidth, deputadosHeight, senadoresWidth, senadoresHeight}) => {
  const deputadosFC = totalDeputados.filter((pessoa) => pessoa.FPC === true);

  const senadoresFC = totalSenadores.filter((pessoa) => pessoa.FPC === true);

  const totalDeputadosCatolicos = deputadosFC.filter((pessoa) => pessoa.religiao === 'Católico');

  const totalSenadoresCatolicos = senadoresFC.filter((pessoa) => pessoa.religiao === 'Católico');

  return (
    <div className="participantReligionFPC">
      <div className="graphs">
        <div className="graphItem">
          <CongressChart width={deputadosWidth} height={deputadosHeight} color="#6a8d82" data={totalDeputados} highlight={deputadosFC} stroke={totalDeputadosCatolicos} />
          <div className="spacing"></div>
        </div>
        <div className="graphItem">
          <CongressChart width={senadoresWidth} height={senadoresHeight} color="#6a8d82" data={totalSenadores} highlight={senadoresFC} stroke={totalSenadoresCatolicos} />
          <div className="spacing"></div>
        </div>
      </div>
    </div>
  )
}

export default ParticipantReligionFPC