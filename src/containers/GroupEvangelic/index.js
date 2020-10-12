import React from 'react'
import BubbleChartWithHighlight from '../../components/BubbleChartWithHighlight'

const GroupEvangelic = ({totalDeputados, totalSenadores, bubblesWidth, bubblesHeight}) => {
  const deputadosProjection = totalDeputados.filter((pessoa) => pessoa.projecao === true);

  const senadoresProjection = totalSenadores.filter((pessoa) => pessoa.projecao === true);

  const projectionGroups = [].concat(deputadosProjection, senadoresProjection);

  const evangelicPeople = projectionGroups.filter((pessoa) => pessoa.religiao === 'Evangélico')
  
  return (
    <div className="groupEvangelic">
      <div className="graphs">
        <div className="graphItem">
          <BubbleChartWithHighlight width={bubblesWidth} height={bubblesHeight} color="#b76f2b" data={projectionGroups} highlight={evangelicPeople} />
          <span>57% são evangélicos</span>
        </div>
      </div>
    </div>
  )
}

export default GroupEvangelic