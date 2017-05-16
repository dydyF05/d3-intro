import * as d3 from "d3";
import {
    getRandPointsSet,
    getMin,
    getMax
} from '../api/datas.js';


const ScatterPlot = (function(){
    const exposed = {};

    exposed.create = (selector, dataset = getRandPointsSet(17))  => {
        const w = 500;
        const h = 100;
        console.debug(dataset);
        //Create scale functions
        const xScale = d3.scaleLinear()
            .domain([0, d3.max(dataset, d => d[0])])
            .range([0, w]);
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(dataset, d => d[1])])
            .range([0, h]);
        //Create SVG element
        const svg = d3.select(selector)
            .append("svg")
            .attr("width", w)
            .attr("height", h);
        svg.selectAll("circle")
           .data(dataset)
           .enter()
           .append("circle")
           .attr("cx", function(d) {
              return xScale(d[0]);
           })
           .attr("cy", function(d) {
              return yScale(d[1]);
           })
           .attr("r", function(d) {
              return Math.sqrt(h - d[1]);
           });
        svg.selectAll("text")
           .data(dataset)
           .enter()
           .append("text")
           .text(function(d) {
              return d[0] + "," + d[1];
           })
           .attr("x", function(d) {
              return xScale(d[0]);
           })
           .attr("y", function(d) {
              return yScale(d[1]);
           })
           .attr("font-family", "sans-serif")
           .attr("font-size", "11px")
           .attr("fill", "red");
    };
    return exposed;
})();
export default ScatterPlot;
