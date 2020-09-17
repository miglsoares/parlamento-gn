import React from 'react'
import BubbleChart from '../../components/BubbleChart';

import './styles.css';

const ReligiousDebate = data => {
  const { data: graphData } = data

  const totalNenhumaFrente = graphData.filter((pessoa) => pessoa.FPE === false && pessoa.FPC === false && pessoa.FPMA === false);

  const totalTresFrentes = graphData.filter((pessoa) => pessoa.FPE === true || pessoa.FPC === true || pessoa.FPMA === true);

  return (
    <div className="religiousDebate">
      <div className="description">
        <p className="descriptionText">Junto a estes 396 deputados e senadores, há outros 14 parlamentares que pautam o debate religioso no Congresso Nacional</p>
      </div>
      <div className="graphs">
        <div className="graphItem">
          <BubbleChart width={500} height={400} data={totalTresFrentes} />
        </div>
        <div className="graphItem">
          <BubbleChart width={500} height={400} data={totalTresFrentes} />
          <span>esses 14 parlamentares não fazem parte de nenhuma das frentes religiosas</span>
        </div>
      </div>
    </div>
  )
}

export default ReligiousDebate