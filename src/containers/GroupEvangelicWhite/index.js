import React from 'react'
import BubbleChartWithHighlight from '../../components/BubbleChartWithHighlight'

const GroupEvangelicWhite = ({totalDeputados, totalSenadores, bubblesWidth, bubblesHeight}) => {
  const deputadosProjection = totalDeputados.filter((pessoa) => pessoa.projecao === true);

  const senadoresProjection = totalSenadores.filter((pessoa) => pessoa.projecao === true);

  const projectionGroups = [].concat(deputadosProjection, senadoresProjection);

  const evangelicPeople = projectionGroups.filter((pessoa) => pessoa.cor === 1)
  
  return (
    <div className="GroupEvangelicWhite">
      <div className="graphs">
        <div className="graphItem">
          <BubbleChartWithHighlight width={bubblesWidth} height={bubblesHeight} color="#b76f2b" data={projectionGroups} highlight={evangelicPeople} />
          <span>69% são brancos</span>
        </div>
      </div>
    </div>
  )
}

export default GroupEvangelicWhite