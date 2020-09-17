import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { number, array } from 'prop-types'

import './styles.css'

const BubbleChart = ({ data, width, height }) => {
  const ref = useRef(null)

  useEffect(() => {
    const color = d3
    .scaleLinear()
    .interpolate(d3.interpolateHcl)
    .range(["#0000"]);

    const simulation = d3.forceSimulation(data)
    .velocityDecay(0.5)
    .force("forceX", d3.forceX().strength(.1).x(width * .5))
    .force("forceY", d3.forceY().strength(.1).y(height * .5))
    .force("center", d3.forceCenter().x(width * .5).y(height * .5))
    .force("charge", d3.forceManyBody().strength(-15));

      //update the simulation based on the data
    simulation
        .nodes(data)
        .force("collide", d3.forceCollide().radius(function(d){ return d.radius; }).iterations(1))
        .on("tick", function(d){
          node
              .attr("cx", function(d){ return d.x; })
              .attr("cy", function(d){ return d.y; })
        });

    const svg = d3.select(ref.current);

    // Define the div for the tooltip
    var div = d3.select(ref.current).append("div")	
    .attr("class", "tooltip")
    .style("opacity", 0);

    var node = svg.append("g")
        .attr("class", "node")
      .selectAll("circle")
      .data(data)
      .enter().append("circle")
        .attr("r", 8)
        // .attr("fill", function(d) { return color(d.continent); })
        .attr("cx", function(d){ return d.x; })
        .attr("cy", function(d){ return d.y; })
      .on("mouseover", function(d) {
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
  }, [data, height, width])

  console.log(ref)

  return (
    <svg id={Math.round(Math.random([1, 100]))} ref={ref} width={width} height={height} />
  )
}

BubbleChart.propTypes = {
  data: array,
  width: number,
  height: number,
};

BubbleChart.defaultProps = {
  data: [],
  width: 600,
  height: 600
};

export default BubbleChart;