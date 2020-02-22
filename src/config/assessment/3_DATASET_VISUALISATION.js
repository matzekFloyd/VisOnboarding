import {TASK_DATA_SET_VISUALISATION} from "../../../constants";
import {sanitizePublicPath} from "../../util/helpers";

const GANTT_ICON_SRC = sanitizePublicPath("static/gantt_chart.svg");
const TREE_MAP_SRC = sanitizePublicPath("static/treemap.svg");
const LINE_GRAPH_SRC = sanitizePublicPath("static/line_graph.svg");
const VENN_DIAGRAM_SRC = sanitizePublicPath("static/venn_diagram.svg");

export const DATA_SET_VISUALISATION = {
    identifier: TASK_DATA_SET_VISUALISATION,
    image: {id: "img-georg-fischer-data-set", src: "georg-fischer-data-set.png"},
    task: "Which of the following visualization techniques would be suitable here:",
    options: [
        {text: "<img src='" + GANTT_ICON_SRC + "' alt=''/><span>Gantt Chart</span>", correct: true},
        {text: "<img src='" + TREE_MAP_SRC + "' alt=''/><span>Treemap</span>", correct: false},
        {text: "<img src='" + LINE_GRAPH_SRC + "' alt=''/><span>Line Graph</span>", correct: true},
        {text: "<img src='" + VENN_DIAGRAM_SRC + "' alt=''/><span>Venn Diagram</span>", correct: false},
    ]
};