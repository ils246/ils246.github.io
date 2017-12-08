

var data =[
{year:2017, refs:0},
{year:2016, refs:123.371},
{ year:2015, refs:450.020},
{ year:2014, refs:603.680},
{ year:2013, refs:614.446},
{ year:2012, refs:576.442},
{ year:2011, refs:532.986},
{ year:2010, refs:512.565},
{ year:2009, refs:461.135},
{ year:2008, refs:406.510},
{ year:2007, refs:374.155},
{ year:2006, refs:309.024},
{ year:2005, refs:266.562},
{ year:2004, refs:237.712},
{ year:2003, refs:223.191},
{ year:2002, refs:203.694},
{ year:2001, refs:184.057},
{ year:2000, refs:175.921},
]



var margin = { top: 35, right: 0, bottom: 30, left: 40 };

  var width = 800 - margin.left - margin.right;
  var height = 500 - margin.top - margin.bottom;

  var chart = d3.select(".chart2016")
      .attr("width", 800)
      .attr("height", 500)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  ///////////////////////
  // Scales
  var x = d3.scale.ordinal()
      .domain(data.map(function(d) { return d['year']; }))
      .rangeRoundBands([0, width], .1);

  var y = d3.scale.linear()
      .domain([0, d3.max(data, function(d) { return d['refs']; }) * 1.1])
      .range([height, 0]);

  ///////////////////////
  // Axis
  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

  chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(-5," + height + ")")
      .call(xAxis);

  // chart.append("text")
  //       .attr("class", "x label")
  //       .attr("text-anchor", "middle")
  //       .attr("y", 100)
  //       .attr("x", width / 2.0)
  //       .style("font-size", "22px")
  //       .text('Retroactive years');

        // .attr("class", "x-axis")



  chart.append("g")
      .attr("class", "y axis")
      .style("width,", "50px")
      .style("font-size", "15px")
      .call(yAxis);

  ///////////////////////
  // Title
  chart.append("text")
    .text('YEAR 2016 Counts')
    .style("font-size", "22px")
    .attr("text-anchor", "middle")
    .attr("class", "graph-title")
    .attr("y", -8)
    .attr("x", width / 2.0);

  ///////////////////////
  // Bars
  var bar = chart.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar16")
      .attr("x", function(d) { return x(d['year']); })
      .attr("y", height)
      .attr("width", "28px")
      .attr("height", 0);

  bar.transition()
      .duration(1500)
      .ease("elastic")
      .attr("y", function(d) { return y(d['refs']); })
      .attr("height", function(d) { return height - y(d['refs']); })

  ///////////////////////
  // Tooltips
  // var tooltip = d3.select("body").append("div")
  //     .attr("class", "tooltip");

  bar.on("mouseover", function(d) {
        // tooltip.html(d['value'])
        //     .style("visibility", "visible");
      })
      .on("mousemove", function(d) {
        // tooltip.style("top", event.pageY - (tooltip[0][0].clientHeight + 5) + "px")
        //     .style("left", event.pageX - (tooltip[0][0].clientWidth / 2.0) + "px");
      })
      .on("mouseout", function(d) {
        // tooltip.style("visibility", "hidden");
      });
