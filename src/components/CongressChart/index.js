import React, {useRef, useEffect} from 'react'
import './d3-parliament'
import * as d3 from 'd3'

import './styles.css'

const CongressChart = ({width, height, data}) => {
  const ref = useRef(null)

  const congressId = `congress-${Math.floor(Math.random() * (10 - 1)) + 1}`

  useEffect(() => {

    const svg = d3.select(ref.current);

  /* set up the parliament */
  var parliament = d3.parliament();
  parliament.width(width).height(height).innerRadiusCoef(0.5);

    // Define the div for the tooltip
  var div = d3.select(ref.current).append("div")	
  .attr("class", "tooltip")
  .style("opacity", 0);

  parliament.on("mouseover", function(d) {
    div.transition()
        .duration(200)
        .style("opacity", .9)
        .attr('stroke-width',4);
    div.html(d.party.nome + "<br/>"  + d.party.partido + "/" + d.party.estado + "<br/>" + d.party.cargo)
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY - 28) + "px");
    });
    parliament.on("mouseout", function(d) {
    div.transition()
        .duration(500)
        .style("opacity", 0)
        .attr('stroke-width',0);
    });
  
      svg.data([data])
        .call(parliament);
          d3.select(`${congressId}`)
            .selectAll('circle')
            .attr('fill', d => '#4d4d4d')

  }, [data, height, width, congressId])

  return (
    <svg ref={ref} width={width} height={height} />
  )
};

export default CongressChart;
