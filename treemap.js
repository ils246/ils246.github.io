// var colors = ["#b2f7da","#91F4CB", "#0C958E", "#958DFF", "#5D2B7D", "#7D287C"]
//
// var color = d3.scale.category20().range(colors);
//
// var root = {
//   "name":"science",
//   "size":60,
//   "children": [
//   {
//     "name": "Physical",
//     "size": 100,
//     "category": "Physical Science",
//     "level": 1,
//     "children": [
//       {"name": "Physicis", "size": 40, "category": "Physical Science","level":0 },
//       {"name": "Chemistry", "size": 40, "category":"Physical Science","level":0},
//       {"name": "Earth Sciences", "size": 40, "category":"Physical Science","level":0},
//       {"name": "Space Science", "size": 40, "category":"Physical Science","level":0},
//     ]},
//   {
//     "name": "Formal",
//     "size": 100,
//     "category": "Formal Science",
//     "level": 1,
//     "children": [
//       {"name": "Mathematics", "size": 40, "category":"Formal Science" ,"level":0},
//       {"name": "Logic", "size": 40, "category": "Formal Science","level":0},
//     ]},
//     {
//       "name": "Social",
//       "size": 100,
//       "category": "Social Sciences",
//       "level": 1,
//       "children": [
//         {"name": "History", "size": 40, "category":  "Social Science","level":0},
//         {"name": "Antrhopology", "size": 40, "category":  "Social Science","level":0},
//         {"name": "Sociology", "size": 40, "category": "Social Science","level":0 },
//         {"name": "Economics", "size": 40, "category": "Social Science" ,"level":0},
//         {"name": "Philosopy", "size": 40, "category": "Social Science","level":0 },
//       ]},
// ]
// };
//
//   var margin = {top: 0, right: 10, bottom: 20, left: 10},
//                         width = 560 - margin.left - margin.right,
//                         height = 200 - margin.top - margin.bottom;
//
//           //var color = d3.scale.category10();
//           color = d3.scale.linear().domain([0,15]).range(['hsla(195, 100%, 50%, 1)','hsla(195, 100%, 31%, 1)']);
//
//           var treemap = d3.layout.treemap()
//                             .size([height,width])
//                             // .sticky(true)
//                             .value(function(d) { return d.size; });
//
//           var div = d3.select("#treemap").append("div")
//                             .style("position", "relative")
//                             // .style("background-color",'white')
//                             .style("width", (width + margin.left + margin.right) + "px")
//                             .style("height", (height + margin.top + margin.bottom) + "px")
//                             .style("left", margin.left + "px")
//                             .style("top", margin.top + "px");
//
//             var node = div.datum(root).selectAll(".node")
//             // .data(bubble.nodes({children:root}).filter(function(d) { return true; })) //!d.children
//
//                 .data(treemap.nodes)
//               .enter().append("div")
//                 .attr("class", "node")
//                 .call(position)
//                 .style("background-color", function(d,i) { return d.children ? null : color(i); })
//                 .text(function(d) { return d.children ? null : d.name; });
//
//               node
//                   .data(treemap.value(function(d) { return d.size; }).nodes)
//                 .transition()
//                   .duration(1500)
//                   .call(position);
//
//           function position() {
//                 this.style("left", function(d) { return d.x + "px"; })
//                     .style("top", function(d) { return d.y + "px"; })
//                     .style("width", function(d) { return Math.max(0, d.dx - 1) + "px"; })
//                     .style("height", function(d) { return Math.max(0, d.dy - 1) + "px"; });
//               }
//
//           d3.selectAll('.node').on('mouseover',function(){
//             d3.select(this).style('box-shadow','3px 0px 30px #fff');
//           });
//           d3.selectAll('.node').on('mouseout',function(){
//             d3.select(this).style('box-shadow','none');
//           });


// ------- D3PLUS -----------

// sample data array
  var sample_data = [
    {"value": 11394,"name": "Physics","hex": "#7deea9"},
    {"value": 10391,"name": "Chemistry","hex": "#a4f3c2"},
    {"value": 330,"name": "Space Science","hex": "#bef6d4"},
    {"value": 153,"name": "Earth Science","hex":"#d8f9e5"},
    {"value": 5745, "name": "Mathematics","hex":"#0C958E"},
    {"value": 21316, "name": "Logic","hex":"#3caaa4"},
    {"value": 44322, "name": "Statistics","hex": "#6dbfbb"},
    {"value": 236535, "name": "History","hex":"#7d287c"},
    {"value": 2207, "name": "Antropology","hex":"#975296"},
    {"value": 3888, "name": "Sociology","hex":"#b17eb0"},
    {"value": 39857, "name": "Economics","hex":"#cba9ca"},
    {"value": 2835, "name": "Political Science","hex":"#e5d4e4"}
  ]
  // instantiate d3plus
  var visualization = d3plus.viz()
    .container("#svg_treemap")  // container DIV to hold the visualization
    .data(sample_data)  // data to use with the visualization
    .type("tree_map")   // visualization type
    .id("name")         // key for which our data is unique on
    .size("value")      // sizing of blocks
    .color("hex")
    .background('#011F26')
    .font({ "family": "Raleway"})
    .tooltip({
      'background': d3plus.color.lighter('#011F26', 0.8)})
    .draw()             // finally, draw the visualization!
