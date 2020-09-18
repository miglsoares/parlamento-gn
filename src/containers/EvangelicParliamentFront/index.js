import React from 'react'
import BubbleChart from '../../components/BubbleChart'
import BubbleChartWithHighlight from '../../components/BubbleChartWithHighlight';

const EvangelicParliamentFront = data => {
  const { data: graphData } = data

  const totalFrenteEvangelica = graphData.filter((pessoa) => pessoa.FPE === true);
  
  return (
    <div className="evangelicParliamentFront">
      <div className="graphs">
        <div className="graphItem">
          <BubbleChartWithHighlight width={700} height={500} highlight={totalFrenteEvangelica} data={graphData}/>
        </div>
      </div>
    </div>
  )
}

export default EvangelicParliamentFront