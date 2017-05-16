import Barchart from '../chart/barchart.js';

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


    exposed.start = container_selector => {
        _container_selector = container_selector;
        _container = document.getElementById(container_selector.replace(/#/, ''));
        createBarCharts();
    };
    return exposed;
})();
export default App;
