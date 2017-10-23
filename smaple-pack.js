// Bubble chart using D3
var diameter = 560;
// var colors = ['#2AA4A9', '#57B28D','#FBAE4B', '#F16045', '#D12258', '#734743', '#80A464', '#435773'];

var colors = ["#7D287C","#5D2B7D","#91F4CB","#91F4CB","#defbef","#91F4CB", "#0C958E", "#958DFF","#91F4CB" ]
var colors = ["#b2f7da","#91F4CB", "#0C958E", "#958DFF", "#5D2B7D", "#7D287C"]

var color = d3.scale.category10().range(colors);
var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter * 1.4, diameter]) //size of the bubble chart
    .padding(8);
var svg = d3.select("body").select("#svg_bubble");

// 1. Modify the dataset
var science = [
  {
    "name": "Physical",
    "value": 100,
    "category": "Physical Science",
    "level": 1,
    "children": [
      {"name": "Physicis", "value": 40, "category": "Physical Science","level":0 },
      {"name": "Chemistry", "value": 40, "category":"Physical Science","level":0},
      {"name": "Earth Sciences", "value": 40, "category":"Physical Science","level":0},
      {"name": "Space Science", "value": 40, "category":"Physical Science","level":0},
    ]},
  {
    "name": "Formal",
    "value": 100,
    "category": "Formal Science",
    "level": 1,
    "children": [
      {"name": "Mathematics", "value": 40, "category":"Formal Science" ,"level":0},
      {"name": "Logic", "value": 40, "category": "Formal Science","level":0},
    ]},
    {
      "name": "Social",
      "value": 100,
      "category": "Social Sciences",
      "level": 1,
      "children": [
        {"name": "History", "value": 40, "category":  "Social Science","level":0},
        {"name": "Antrhopology", "value": 40, "category":  "Social Science","level":0},
        {"name": "Sociology", "value": 40, "category": "Social Science","level":0 },
        {"name": "Economics", "value": 40, "category": "Social Science" ,"level":0},
        {"name": "Philosopy", "value": 40, "category": "Social Science","level":0 },
      ]},

];

// 2. Change the color of the node when hovered over
var node = svg.selectAll(".node")
    .data(bubble.nodes({children:science}).filter(function(d) { return true; })) //!d.children
    // .data(bubble.nodes({children:science}))
  .enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

node.append("circle")
    .attr("r", function(d) { return d.r; })
    // .style("fill", function(d) { return color(d.category); })
    // .style("fill", "#aaa")
    .style ("fill", function(d) { return color(d.category); })
    .attr("opacity", 0.3)
    .style("stroke", "#000000")

// 3. Change the font size to be based on node radius
node.append("text")
    .attr("dy", ".3em")
    // .style("text-anchor", "middle")
    .attr("x", function(d){ return d.level === 1 ? d.r * -0.8:1;})
    .attr("y", function(d){return d.level ==1 ? d.r*-0.7:1;})
    .style("text-anchor", function(d) {return d.level === 1 ? "end":"middle";})
    .style("pointer-events", "none")
    .style("fill", "#eee")
    .style('font-size', function(d){ return d.r*0.2 + 5})
    .text(function(d) { return d.name; });
    // .text(function(d) { return d.name.substring(0, d.r / 3); });
