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
    const applyColor = d => "rgba(0, 49, 51, " + roundTo1(d) + ")";
    const applyText = d => d;

    exposed.create = (selector, data = getRandDatas(10)) => {
        d3.select(selector)
            .selectAll("div")
            .data(data)
            .enter().append("div")
            .style("width", applyWidth)
            .style("background", applyColor)
            .style("opacity", roundTo1)
            .text( applyText );
    };
    return exposed;
})();
export default Barchart;
