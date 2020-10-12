import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { number, array } from 'prop-types'

import './styles.css'

const BubbleChartWithHighlight = ({ color, highlight, data, width, height }) => {
  const ref = useRef(null)

  useEffect(() => {
    const svg = d3.select(ref.current);

    const shouldHighlight = d => highlight ? setHighlights(d) : '#89918e'

    const setHighlights = parlamentar => {
      if (highlight) {
        const highlightsArray = highlight.find(
          p => (
            p.nome === parlamentar.nome
          )
        )

        if (highlightsArray) {
          return color
        }
        return '#89918e'
      }
    }

    const groupCircle = svg.selectAll("circle")
      .data(data)
      .enter()
      .append('circle')
      .attr("class", "node")
      .attr('fill', d => shouldHighlight(d))
      .attr("r", 6)
      .attr("cx", function(d){ return d.x; })
      .attr("cy", function(d){ return d.y; })

    const simulation = d3.forceSimulation(data)
    .velocityDecay(0.5)
    .force("forceX", d3.forceX().strength(.1).x(width * .5))
    .force("forceY", d3.forceY().strength(.1).y(height * .5))
    .force("center", d3.forceCenter().x(width * .5).y(height * .5))
    .force("charge", d3.forceManyBody().strength(-15));


    // Define the div for the tooltip
    let div = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);
    
    const whichFront = parlamentar => {
      const fronts = {
        FPE: "<img class='tooltipImage' src='images/fpe.svg' alt='FPE' />",
        FPC: "<img class='tooltipImage' src='images/fpc.svg' alt='FPC' />",
        FPMA: "<img class='tooltipImage' src='images/fpma.svg' alt='FPMA' />"
      }

      let result = ''
      const frontFPE = parlamentar.FPE === true
      const frontFPC = parlamentar.FPC === true
      const frontFPMA = parlamentar.FPMA === true

      if (frontFPE) {
        result += fronts.FPE
      }

      if (frontFPC) {
        result += fronts.FPC
      }

      if (frontFPMA) {
        result += fronts.FPMA
      }

      return result
    }

    const tooltipContent = d => (
      "<h2>" + d.nome + "</h2>" +
      "<span>" + d.partido + "/" + d.estado + "</span>" + "<br/>" + whichFront(d)
    )

    groupCircle.on("mouseover", (d) => {
      div.transition()
        .duration(200)
        .style("opacity", 1)
        .attr('stroke-width',4)
      div.html(tooltipContent(d))
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY - 28) + "px")
      });

      groupCircle.on("mouseout", (d) => {
      div.transition()
        .duration(500)
        .style("opacity", 0)
        .attr('stroke-width',0)
    });

    simulation
      .nodes(data)
      .force("collide", d3.forceCollide().radius(4).iterations(1))
      .on("tick", function(d){
        groupCircle
          .attr("cx", function(d){ return d.x; })
          .attr("cy", function(d){ return d.y; })
      });

  }, [data, height, width, color, highlight])

  return (
    <svg ref={ref} width={width} height={height} />
  )
}

BubbleChartWithHighlight.propTypes = {
  data: array,
  width: number,
  height: number,
};

BubbleChartWithHighlight.defaultProps = {
  data: [],
  width: 600,
  height: 600,
};

export default BubbleChartWithHighlight;