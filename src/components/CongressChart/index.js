import React, {useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import './d3-parliament'
import * as d3 from 'd3'

import './styles.css'

const CongressChart = ({ fronts, color, highlight, width, height, data, stroke }) => {
  const ref = useRef(null)

  useEffect(() => {
    const svg = d3.select(ref.current);

    // Set up the parliament
    let parliament = d3.parliament();
    parliament.width(width).height(height).innerRadiusCoef(0.5);
    parliament.enter.fromCenter(false).smallToBig(false);
    parliament.exit.toCenter(false).bigToSmall(false);

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
      const frontFPE = parlamentar.party.FPE === true
      const frontFPC = parlamentar.party.FPC === true
      const frontFPMA = parlamentar.party.FPMA === true

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
      "<h2>" + d.party.nome + "</h2>" +
      "<span>" + d.party.partido + "/" + d.party.estado + "</span>" + "<br/>" + whichFront(d)
    )

    parliament.on("mouseover", (d) => {
      div.transition()
        .duration(200)
        .style("opacity", 1)
        .attr('stroke-width',4)
      div.html(tooltipContent(d))
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY - 28) + "px")
      });

    parliament.on("mouseout", (d) => {
      div.transition()
        .duration(500)
        .style("opacity", 0)
        .attr('stroke-width',0)
    });

    const shouldHighlight = d => highlight ? setHighlights(d) : '#303b3b'

    const setHighlights = parlamentar => {
      if (highlight) {
        const highlightsArray = highlight.find(
          p => (
            p.nome === parlamentar.party.nome
          )
        )

        if (highlightsArray) {
          return color
        }
        return '#303b3b'
      }
    }

    const shouldStroke = d => stroke ? setStroke(d) : 0

    const setStroke = parlamentar => {
      if (stroke) {
        const strokeArray = stroke.find(
          p => (
            p.nome === parlamentar.party.nome
          )
        )

        if (strokeArray) {
          return 0,1.3
        }
        return 0
      }
    }
  
    svg.data([data])
      .call(parliament)
      .selectAll('circle')
        .attr('fill', d => shouldHighlight(d))
        .attr('stroke', '#ffffff')
        .attr('stroke-width', d => shouldStroke(d))
        // .style("opacity", 0)
        // .transition()
        //   .delay(100)
        //   .style("opacity", 1)

  }, [color, highlight, stroke, data, height, width])

  const setWidth = width
  const setHeight = height

  return (
    <svg ref={ref} width={setWidth} height={setHeight} />
  )
};

CongressChart.propTypes = {
  color: PropTypes.string.isRequired,
  stroke: PropTypes.array,
}

CongressChart.defaultProps = {
  color: '#8C9191',
  stroke: null,
}

export default CongressChart
