import Barchart from '../chart/barchart.js';
import ScatterPlot from '../chart/scatterplot.js';

const App = (function() {
    const exposed = {};
    let _container = null;
    let _container_selector = null;


    const createBarCharts = () => {
        const newBarChartContainerId = "barchart-container-" + Date.now();
        const el = document.createElement('div');
        el.id = newBarChartContainerId;
        _container.append(el);
        Barchart.create('#'+newBarChartContainerId);
    };

    const createdScatPlots = () => {
        const newID = "scatterplots-container-" + Date.now();
        const el = document.createElement('div');
        el.id = newID;
        _container.append(el);
        ScatterPlot.create('#'+newID);
    };


    exposed.start = container_selector => {
        _container_selector = container_selector;
        _container = document.getElementById(container_selector.replace(/#/, ''));
        createBarCharts();
        createdScatPlots();
    };
    return exposed;
})();
export default App;
