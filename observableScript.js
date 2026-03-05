import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";

import define from "https://api.observablehq.com/d/80c37d7565d08293.js?v=4";

new Runtime().module(define, name => {
    if (name === "squareSORAMOYOU") return new Inspector(document.querySelector("#observablehq-squareSORAMOYOU-85b19a2d"));

    if (name === "whenThisSORAMOYOU") return new Inspector(document.querySelector("#observablehq-whenThisSORAMOYOU-10f71f41"));

    if (name === "viewof rangeYear") return new Inspector(document.querySelector("#observablehq-viewof-rangeYear-37b5cff6"));

    if (name === "viewof selectMonth") return new Inspector(document.querySelector("#observablehq-viewof-selectMonth-8e5e2c04"));

    if (name === "viewof selectDay") return new Inspector(document.querySelector("#observablehq-viewof-selectDay-96faea45"));

    if (name === "viewof placeSelect") return new Inspector(document.querySelector("#observablehq-viewof-placeSelect-97ea0d29"));

    if (name === "viewof layerSelect") return new Inspector(document.querySelector("#observablehq-viewof-layerSelect-ea36a6c5"));


  return ["viewof downloadButton",
    "targetYears",
    "viewof selectDay",
    "mm",
    "dd",
    "githubCSV",
    "githubData",
"viewof mixBlendModeSelect"].includes(name);
});

