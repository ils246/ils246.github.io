

var data =[
{year:2017, refs:0},
{ year:2016, refs:123.371},
{ year:2015, refs:482.9114317588471},
{ year:2014, refs:682.544634670899},
{ year:2013, refs:685.8730773096873},
{ year:2012, refs:608.6041209272101},
{ year:2011, refs:562.5105151640616},
{ year:2010, refs:577.7195694890108},
{ year:2009, refs:526.5498336812384},
{ year:2008, refs:386.37945873443056},
{ year:2007, refs:321.6220871430379},
{ year:2006, refs:248.54060821861088},
{ year:2005, refs:192.99755289307527},
{ year:2004, refs:163.87758492909637},
{ year:2003, refs:150.88796379774348},
{ year:2002, refs:132.68198776869198},
{ year:2001, refs:116.57853573934145},
{ year:2000, refs:116.876013364156}
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
    .text('YEAR 2016')
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
