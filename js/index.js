import App from "./d3/app.js";

window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false);
    App.start('#d3-app');
},false);
