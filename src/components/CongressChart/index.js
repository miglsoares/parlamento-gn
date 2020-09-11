import React from 'react'
import 'd3-parliament'
import * as d3 from 'd3'

import './styles.css'

const CongressChart = () => {
  const width = 600
  const height = 500
  
  var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)

  /* set up the parliament */
  var parliament = d3.parliament();
  parliament.width(width).height(height).innerRadiusCoef(0.5);

  // Define the div for the tooltip
var div = d3.select("body").append("div")	
.attr("class", "tooltip")				
.style("opacity", 0);

  /* register event listeners */
  // parliament.on("click", function(d) { alert("You clicked on " + d.party.nome + " of " + d.party.partido); }); 
  // parliament.on("mouseover", function(d) {
  // //d3.selectAll('circle').attr('opacity', 0.2);
  //   d3.select(this).attr('stroke', d => cor(d.party.partido)).attr('stroke-width',4);
  // });
  // parliament.on("mouseout", function(d) {
  //   d3.select(this).attr('stroke', d => cor(d.party.partido)).attr('stroke-width',0);
  // });

  parliament.on("mouseover", function(d) {		
    div.transition()		
        .duration(200)		
        .style("opacity", .9)
        .attr('stroke-width',4);
    div.html(d.party.nome + "<br/>"  + d.party.partido)	
        .style("left", (d3.event.pageX) + "px")		
        .style("top", (d3.event.pageY - 28) + "px");	
    });
    parliament.on("mouseout", function(d) {		
    div.transition()		
        .duration(500)		
        .style("opacity", 0)
        .attr('stroke-width',0);
    });
  
  
  const cor = d3.scaleOrdinal()
  
  return (
    d3.json("data.json", function(d) {
    
      const partidos = d3.map(d, d => d.partido).keys()

      console.log(partidos);
      const cores = ['gray']
      cor.domain(partidos)
         .range(cores)
      
      svg.datum(d).call(parliament);
      d3.selectAll('svg circle')
        .attr('fill', d => cor(d.party.partido)) 
    })
  )
};

export default CongressChart;
