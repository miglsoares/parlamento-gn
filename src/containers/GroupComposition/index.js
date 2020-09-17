import React from 'react'
import BubbleChart from '../../components/BubbleChart';

import './styles.css';

const GroupComposition = data => {
  const { data: graphData } = data

  const totalTresFrentes = graphData.filter((pessoa) => pessoa.carreiraParlamentar === 'projeção');

  return (
    <div className="groupComposition">
      <div className="description">
        <span className="descriptionNumber">69</span>
        <p className="descriptionText">deles se destacam pela alta capacidade de influência e alcance nos temas relacionados.</p>
        <p className="descriptionText">
        Aqui, chamamos de grupo com projeção.</p>
      </div>
      <div className="graphs">
        <div className="graphItem">
          <BubbleChart width={500} height={400} data={totalTresFrentes} />
        </div>
      </div>
    </div>
  )
}

export default GroupComposition