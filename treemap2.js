// sample data array
  var sample_data = [
    {"value": 38416,"name": "Physics","hex": "#7deea9"},
    {"value": 46634,"name": "Chemistry","hex": "#a4f3c2"},
    {"value": 39273,"name": "Space Science","hex": "#bef6d4"},
    {"value": 31833,"name": "Earth Science","hex":"#d8f9e5"},
    {"value": 37220, "name": "Mathematics","hex":"#0C958E"},
    {"value": 14608240, "name": "Statistics","hex": "#6dbfbb"},
    {"value": 872599, "name": "History","hex":"#7d287c"},
    {"value": 16562, "name": "Antropology","hex":"#975296"},
    {"value": 23241, "name": "Sociology","hex":"#b17eb0"},
    {"value": 109415, "name": "Economics","hex":"#cba9ca"},
    {"value": 14608240, "name": "Political Science","hex":"#e5d4e4"}
  ]
  // instantiate d3plus
  var visualization = d3plus.viz()
    .container("#svg_treemap2")  // container DIV to hold the visualization
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
