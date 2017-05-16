import * as d3 from "d3";
import {
    getRandDatas,
    getMin,
    getMax
} from '../api/datas.js';

const Barchart = (function(){
    const exposed = {};

    const roundTo1 = d => d / getMax();
    const applyWidth = d => d * 1.2 + "px";
    const applyColor = d => d3.interpolateCool(roundTo1(d));
    const applyText = d => d;

    exposed.create = (selector, data = getRandDatas(10)) => {
        data = data.sort();

        const x = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([getMin(), getMax()]);

        d3.select(selector)
            .selectAll("div")
            .data(data)
            .enter().append("div")
            .style("width", applyWidth)
            .style("background", applyColor)
            .style("margin-top", d => "2px")
            .text( applyText );
    };
    return exposed;
})();
export default Barchart;
