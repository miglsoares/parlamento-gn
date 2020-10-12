import React from 'react'
import CongressChart from '../../components/CongressChart';

const ParticipantReligionFPE = ({totalDeputados, totalSenadores, deputadosWidth, deputadosHeight, senadoresWidth, senadoresHeight}) => {
  const deputadosFE = totalDeputados.filter((pessoa) => pessoa.FPE === true);

  const senadoresFE = totalSenadores.filter((pessoa) => pessoa.FPE === true);

  const totalDeputadosEvangelicos = deputadosFE.filter((pessoa) => pessoa.religiao === 'Evangélico');

  const totalSenadoresEvangelicos = senadoresFE.filter((pessoa) => pessoa.religiao === 'Evangélico');

  return (
    <div className="participantReligionFPE">
      <div className="graphs">
        <div className="graphItem">
          <CongressChart width={deputadosWidth} height={deputadosHeight} color="#736431" data={totalDeputados} highlight={deputadosFE} stroke={totalDeputadosEvangelicos} />
          <div className="spacing"></div>
        </div>
        <div className="graphItem">
          <CongressChart width={senadoresWidth} height={senadoresHeight} color="#736431" data={totalSenadores} highlight={senadoresFE} stroke={totalSenadoresEvangelicos} />
          <div className="spacing"></div>
        </div>
      </div>
    </div>
  )
}

export default ParticipantReligionFPE