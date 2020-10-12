import React from 'react'
import BubbleChartWithHighlight from '../../components/BubbleChartWithHighlight'

const BubbleProjectionGroups = ({totalDeputados, totalSenadores, bubblesWidth, bubblesHeight}) => {
  const deputadosProjection = totalDeputados.filter((pessoa) => pessoa.projecao === true);

  const senadoresProjection = totalSenadores.filter((pessoa) => pessoa.projecao === true);

  const projectionGroups = [].concat(deputadosProjection, senadoresProjection);
  
  return (
    <div className="BubbleProjectionGroups">
      <div className="graphs">
        <div className="graphItem">
          <BubbleChartWithHighlight width={bubblesWidth} height={bubblesHeight} color="#89918e" data={projectionGroups} />
          <div className="spacing-sm"></div>
        </div>
      </div>
    </div>
  )
}

export default BubbleProjectionGroups