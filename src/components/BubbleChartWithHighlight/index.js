import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { number, array } from 'prop-types'

import './styles.css'

const BubbleChartWithHighlight = ({ highlight, data, width, height }) => {
  const ref = useRef(null)

  useEffect(() => {
    // const color = d3
    //   .scaleLinear()
    //   .interpolate(d3.interpolateHcl)
    //   .range(["#0000"]);

    const svg = d3.select(ref.current);

    const groupCircle = svg.selectAll("g")
      .data(data)
      .enter()
      .append('g')
      .attr("class", "node")
      .attr("transform",function(d) {
        return `translate(${d.x}, ${d.y})`
      })
    
    const checkHighlight = parlamentar => {
      const shouldHighlight = highlight.find(
        p => (
          p.nome === parlamentar.nome
        )
      )
      if (shouldHighlight) {
        return parlamentar.FPEColor
      }

      return '#4e4f4f'
    }

    const oneColorCombination = () => {

    }

    const twoColorCombination = () => { 
      groupCircle.append("path")
      .attr("d", "M13.4518 11.6279C14.037 10.716 14.3667 9.66362 14.4062 8.58079C14.4458 7.49795 14.1938 6.42436 13.6767 5.47218C13.1595 4.52 12.3961 3.72417 11.4663 3.16785C10.5365 2.61152 9.4743 2.31511 8.39076 2.30958L8.35988 8.35988L13.4518 11.6279Z")
      .attr("fill", "#6aab98")

      groupCircle.append("path")
        .attr("d", "M8.46537 2.39597C7.41405 2.39266 6.38001 2.66335 5.46516 3.18136C4.55032 3.69937 3.78623 4.44682 3.24822 5.35005C2.71021 6.25328 2.41683 7.28111 2.39701 8.33224C2.37719 9.38338 2.6316 10.4215 3.13517 11.3444L8.44632 8.44633L8.46537 2.39597Z")
        .attr("fill", "#dbda52")
    }

    const threeColorCombination = groupCircle.append("path")
        .attr("d", "M13.4518 11.6279C14.037 10.716 14.3667 9.66362 14.4062 8.58079C14.4458 7.49795 14.1938 6.42436 13.6767 5.47218C13.1595 4.52 12.3961 3.72417 11.4663 3.16785C10.5365 2.61152 9.4743 2.31511 8.39076 2.30958L8.35988 8.35988L13.4518 11.6279Z")
        .attr("fill", checkHighlight)

      groupCircle.append("path")
        .attr("d", "M8.46537 2.39597C7.41405 2.39266 6.38001 2.66335 5.46516 3.18136C4.55032 3.69937 3.78623 4.44682 3.24822 5.35005C2.71021 6.25328 2.41683 7.28111 2.39701 8.33224C2.37719 9.38338 2.6316 10.4215 3.13517 11.3444L8.44632 8.44633L8.46537 2.39597Z")
        .attr("fill", checkHighlight)

      groupCircle.append("path")
        .attr("d", "M3.11113 11.3491C3.6259 12.2658 4.37064 13.0325 5.27196 13.5737C6.17327 14.1149 7.20006 14.4119 8.25112 14.4355C9.30218 14.459 10.3412 14.2083 11.2659 13.708C12.1905 13.2077 12.9689 12.4751 13.5242 11.5824L8.38663 8.38662L3.11113 11.3491Z")
        .attr("fill", checkHighlight)

    // Define the div for the tooltip
    var div = d3.select(ref.current).append("div")	
      .attr("class", "tooltip")
      .style("opacity", 0);

    const simulation = d3.forceSimulation(data)
    .velocityDecay(0.5)
    .force("forceX", d3.forceX().strength(.1).x(width * .5))
    .force("forceY", d3.forceY().strength(.1).y(height * .5))
    .force("center", d3.forceCenter().x(width * .5).y(height * .5))
    .force("charge", d3.forceManyBody().strength(-15));


    var node = groupCircle.on("mouseover", function(d) {
      div.transition()
          .duration(200)
          .style("opacity", .9)
          .attr('stroke-width',4);
      div.html(d.nome + "<br/>"  + d.partido + "/" + d.estado + "<br/>" + d.cargo)
          .style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY - 28) + "px");
      })
    .on("mouseout", function(d) {
      div.transition()
          .duration(500)
          .style("opacity", 0)
          .attr('stroke-width',0);
      });

    //update the simulation based on the data
    simulation
      .nodes(data)
      .force("collide", d3.forceCollide().radius(4).iterations(1))
      .on("tick", function(d){
        node
          .attr("transform",function(d) {
            return `translate(${d.x}, ${d.y})`
          })
      })

  }, [data, height, width])

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