// Bubble chart using D3
var diameter = 400;
// var colors = ['#2AA4A9', '#57B28D','#FBAE4B', '#F16045', '#D12258', '#734743', '#80A464', '#435773'];

var colors = ["#91F4CB",  "#958DFF","#91F4CB" ]
// var colors = ["#b2f7da","#91F4CB", "#0C958E", "#958DFF", "#5D2B7D", "#7D287C"]

var color = d3.scale.category10().range(colors);
var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter * 1.4, diameter]) //size of the bubble chart
    .padding(8);
var svg = d3.select("body").select("#svg_bubble");

// Build tooltip

var tooltip3 = d3.select("#bubble") //set the tooltip
    .append("div")
    .attr("class", "tooltip3")
    .text("tooltip");



// 1. Modify the dataset
var science = [
  {
    "name": "Other content",
    "value": 1974106,
    "category":1,
    "percent": "96%",
    "children":[],
  },
  {
    "name": "Science",
    "value": 87769,
    "category": 2,
    "percent": "4.44%"
  }

];

// 2. Change the color of the node when hovered over
var node = svg.selectAll(".node")
    // .data(bubble.nodes({children:science}).filter(function(d) { return true; })) //!d.children
    .data(bubble.nodes({children:science}).filter(function(d) { return !d.children; }))
  .enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) { return d.name === "Other content" ? "translate(" + d.x*1.8  + "," + d.y*1.3 + ")":"translate(" + d.x*0.97 + "," + d.y*1.6 + ")"; });



node.append("circle")
    .attr("r", function(d) { return d.value/8000; })
    // .style("fill", function(d) { return color(d.category); })
    // .style("fill", "#aaa")
    .style ("fill", function(d) { return color(d.category); })
    .attr("opacity", 0.5)
    .style("stroke", "#000000")
    .style("stroke-width", "1.5px")
    .style("stroke-opacity",1)
    .on("mouseover", function(d) {
            // d3.select(this).style("fill", "white");
            tooltip3.text("Percent: "  + d.percent);
            tooltip3.style("visibility", "visible");
    })
    .on("mousemove", function() {
        return tooltip3.style("top", (d3.event.pageY)+"px").style("left",(d3.event.pageX + 5)+"px");
    })
    .on("mouseout", function(){
        // d3.select(this).style("fill", function(d){return color(d.category); });
        return tooltip3.style("visibility", "hidden");
    });



// 3. Change the font size to be based on node radius
node.append("text")
    .attr("dy", ".3em")
    // .style("text-anchor", "middle")
    .attr("x", function(d){return d.category === 1 ? d.r*0.01:1;})
    .attr("y", function(d){return d.category === 1 ? d.r*-0.5:d.r*-0.8;})
    .style("text-anchor", function(d) {return d.level === 1 ? "end":"middle";})
    .style("pointer-events", "none")
    .style("fill", "#eee")
    .style('font-size', function(d){ return d.category === 1 ? d.r*0.18:d.r*0.6;})
    .text(function(d) { return d.name; });
