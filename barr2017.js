
var data=[
  { year:2017, refs:22.478},
{ year:2016, refs:189.153},
{ year:2015, refs:275.254},
{ year:2014, refs:302.776},
{ year:2013, refs:298.681},
{ year:2012, refs:277.292},
{ year:2011, refs:254.770},
{ year:2010, refs:244.843},
{ year:2009, refs:219.024},
{ year:2008, refs:191.386},
{ year:2007, refs:176.720},
{ year:2006, refs:146.202},
{ year:2005, refs:124.988},
{ year:2004, refs:111.776},
{ year:2003, refs:105.714},
{ year:2002, refs:96.828},
{ year:2001, refs:86.820},
{ year:2000, refs:83.028},
]

var margin = { top: 35, right: 0, bottom: 30, left: 40 };

  var width = 800 - margin.left - margin.right;
  var height = 500 - margin.top - margin.bottom;

  var chart = d3.select(".chart2017")
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
      .call(yAxis);

  ///////////////////////
  // Title
  chart.append("text")
    .text('YEAR 2017 Counts')
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
      .attr("class", "bar17")
      .attr("x", function(d) { return x(d['year']); })
      .attr("y", height)
      .attr("width", "28px")
      // .attr("width", x.rangeBand())
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
