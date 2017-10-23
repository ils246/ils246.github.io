
var treeData = [
  {
    "name": "Science",
    "parent": "null",
    "def":"Science is a way of thinking much more than it is a body of knowledge.",
    "children": [
      {
        "name": "Natural",
        "parent": "Science",
        "def": "Science concerned with the description, prediction, and understanding of nature's phenomena.",
        "children": [
          {
            "name": "Physical",
            "parent": "Natural",
            "def": "Science that studies non-living systems.",
            "children": [
                {
                  "name": "Physics",
                  "parent": "Physical",
                  "def": "Science that involves the study of matter and its motion through space and time, and related concepts such as energy and force."
                },
                {
                  "name": "Chemistry",
                  "parent": "Physical",
                  "def": "The study of the composition, the statistical properties, transformations and reactions of matter at an atomic and molecular level."
                },
                {
                  "name": "Earth Science",
                  "parent": "Physical",
                  "def": "Sciences related to the planet Earth, including geology, geophysics, hydrology, meteorology, physical geography, oceanography, and soil science."
                },
                {
                  "name": "Space Science",
                  "parent": "Physical"
                }

            ]
          },
          {
            "name": "Life",
            "parent": "Natural",
            "def": "Branch of science that involve the scientific study of living organismsxs as well as related considerations like bioethics.",
            "children":[
              {
                "name":"Biology",
                "parent":"Life",
                "def":"Study of life and living organisms, including their physical and chemical structure, function, development and evolution.",
                "children":[
                  {
                    "name": "Zoology",
                    "parent": "Biology"

                },
                {
                  "name": "Botany",
                  "parent": "Biology"
                }
                ]
              },
              {
                "name": "Molecular Biology",
                "parent": "Life"
              }
            ]
          }
        ]
      },
      {
        "name": "Formal",
        "parent": "Science",
        "children": [
          {
            "name":"Math",
            "parent": "Formal"
          },
          {
            "name": "Logic",
            "parent": "Formal"
          },
          {
            "name":"Statistics",
            "parent":"Formal"
          }
        ]

      },
      {
        "name": "Social",
        "parent": "Science",
        "children": [
          {
            "name":"History",
            "parent":"Social"
          },
          {
            "name":"Anthropology",
            "parent":"Social"
          },
          {
            "name":"Economics",
            "parent":"Social"
          },
          {
            "name":"Sociology",
            "parent":"Social"
          },
          {
            "name":"Political Science",
            "parent":"Social"
          }
        ]
      }
    ]
  }
];

var margin = {top: 40, right: 120, bottom: 20, left: 100},
	width = 960 - margin.right - margin.left,
	height = 500 - margin.top - margin.bottom;

var i = 0;

var tree = d3.layout.tree()
	.size([height, width]);

var diagonal = d3.svg.diagonal()
	.projection(function(d) { return [d.y*1.7, d.x*1.45]; });

var svg = d3.select("body").select("#svg_tree")

root = treeData[0];
update(root);

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
	  links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 120; });

  // Declare the nodes…
  var node = svg.selectAll("g.node")
	  .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter the nodes.
  var nodeEnter = node.enter().append("g")
	  .attr("class", "node")
	  .attr("transform", function(d) {
		  return "translate(" + d.y*1.7 + "," + (d.x*1.45) + ")"; });

  var tooltip = d3.select("#branches_science")
      .append("div")
      .attr("class","tooltip")
      .text("tooltip");

      tooltip2 = d3.select("#branches_science")
      .append("div")
      .attr("class", "tooltip2")
      .text("tooltip")


  nodeEnter.append("circle")
	  .attr("r", 12)
	  .style("fill", "#7D287C")
    .on("mouseover", function(d) {
        d3.select(this).style("fill", "#91F4CB");
        tooltip.text(d.name);
        tooltip.style("visibility", "visible")
        tooltip2.text(d.def);
        tooltip2.style("visibility", "visible");

      })
    .on("mouseout", function(){
        d3.select(this).style("fill", "#7D287C");
        tooltip.style("visibility", "hidden");
        tooltip2.style("visibility", "hidden");
      });

  nodeEnter.append("text")
	  .attr("y", function(d) {
		  return d.children || d._children ? -22 : 1  ; })
    .attr("x", function(d) {
  	  return d.children || d._children ? 0 : 20  ; })
    .attr("text-anchor", function(d){ return d.children || d._children ? "middle" : "left"  ;  })
	  .attr("dy", ".20em")
	  .text(function(d) { return d.name; })
    .style("fill", "#fff")
    .style("font-size", function(d){return d.name === 'Science' ? "25px": "20px;";});
	  // .style("fill-opacity", 1);

  // Declare the link
  var link = svg.selectAll("path.link")
	  .data(links, function(d) { return d.target.id; });

  // Enter the link
  link.enter().insert("path", "g")
    .attr("stroke", "#fff")
    .attr("fill", "None")
    .attr("stroke-width", "2")
    .style("opacity", 0.5)
	  .attr("d", diagonal);
}
