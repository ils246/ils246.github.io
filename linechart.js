

  var sample_data = [
    {"year": 2000, "name":"2017", "value": 122760.6047684255},
    {"year": 2001, "name":"2017", "value": 122380.65601044292},
    {"year": 2002, "name":"2017", "value": 140365.84110367423},
    {"year": 2003, "name":"2017", "value": 159051.27835011965},
    {"year": 2004, "name":"2017", "value": 171491.9550032634},
    {"year": 2005, "name":"2017", "value": 201394.9707828357},
    {"year": 2006, "name":"2017", "value": 261688.838147404},
    {"year": 2007, "name":"2017", "value": 338070.0935512356},
    {"year": 2008, "name":"2017", "value": 404836.5360319431},
    {"year": 2009, "name":"2017", "value": 556582.8727779982},
    {"year": 2010, "name":"2017", "value":614161.462637095},
    {"year": 2011, "name":"2017", "value": 598397.6358796504},
    {"year": 2012, "name":"2017", "value": 651543.40145126},
    {"year": 2013, "name":"2017", "value": 741983.707917941},
    {"year": 2014, "name":"2017", "value": 657349.0629775145},
    {"year": 2016, "name":"2017", "value": 420959.16756037314},
    {"year": 2017, "name":"2017", "value": 22478.0},


    {"year": 2000, "name":"2016", "value": 116876.013364156},
    {"year": 2001, "name":"2016", "value": 116578.53573934145},
    {"year": 2002, "name":"2016", "value": 132681.987768692},
    {"year": 2003, "name":"2016", "value": 150887.9637977435},
    {"year": 2004, "name":"2016", "value": 163877.58492909637},
    {"year": 2005, "name":"2016", "value": 192997.55289307528},
    {"year": 2006, "name":"2016", "value": 248540.6082186109},
    {"year": 2007, "name":"2016", "value": 321622.0871430379},
    {"year": 2008, "name":"2016", "value": 386379.45873443055},
    {"year": 2009, "name":"2016", "value": 526549.8336812383},
    {"year": 2010, "name":"2016", "value":577719.5694890108},
    {"year": 2011, "name":"2016", "value": 562510.5151640617},
    {"year": 2012, "name":"2016", "value": 608604.1209272102},
    {"year": 2013, "name":"2016", "value": 685873.0773096874},
    {"year": 2014, "name":"2016", "value": 682544.634670899},
    {"year": 2016, "name":"2016", "value": 482911.4317588471},
    {"year": 2017, "name":"2016", "value": 0},

    {"year": 2000, "name":"2015", "value": 152547.7078796193},
    {"year": 2001, "name":"2015", "value": 153583.4978993398},
    {"year": 2002, "name":"2015", "value": 175098.3909398311},
    {"year": 2003, "name":"2015", "value": 198032.45485724084},
    {"year": 2004, "name":"2015", "value": 214843.60113714312},
    {"year": 2005, "name":"2015", "value": 252279.22541102205},
    {"year": 2006, "name":"2015", "value": 325001.0696861871},
    {"year": 2007, "name":"2015", "value": 418279.3263418503},
    {"year": 2008, "name":"2015", "value": 503279.35879758635},
    {"year": 2009, "name":"2015", "value": 683724.746216668},
    {"year": 2010, "name":"2015", "value": 740552.8764468832},
    {"year": 2011, "name":"2015", "value": 712312.6790116179},
    {"year": 2012, "name":"2015", "value": 737599.6208147561},
    {"year": 2013, "name":"2015", "value": 639629.0061894453},
    {"year": 2014, "name":"2015", "value": 179082.5241790276},
    {"year": 2016, "name":"2015", "value": 0},
    {"year": 2017, "name":"2015", "value": 0},


  ]
  // instantiate d3plus
  var visualization = d3plus.viz()
    .container("#viz")  // container DIV to hold the visualization
    .data(sample_data)  // data to use with the visualization
    .type("line")       // visualization type
    .id("name")         // key for which our data is unique on
    .text("name")       // key to use for display text
    .y("value")         // key to use for y-axis
    .x("year")          // key to use for x-axis
    .draw()             // finally, draw the visualization!
