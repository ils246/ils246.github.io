// nodele chart using D3
var diameter = 770;
// var colors = ['#2AA4A9', '#57B28D','#FBAE4B', '#F16045', '#D12258', '#5E4E73', '#C2B49B', '#734743', '#80A464', '#435773'];
var colors = ["C2024F", "04BBBF", "D2D945", "FCB13F", "FF594F"];
var color = d3.scale.category10().range(colors);
var bubble = d3.layout.pack()
    .sort( function(a, b) { return -1;} )
    // .sort(null)
    .size([diameter * 1.4, diameter]) //size of the nodele chart
    .padding(1);
var svg = d3.select("body").select("#svg_bubble");
var tooltip = d3.select("body") //set the tooltip
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("color", "white")
    .style("font-size", "20px")
    .style("background-color", "rgba(0, 0, 0, 0.5)")
    .style("border-radius", "3px")
    .style("font", "Raleway")
    .style("height", "35px")
    .style("width", "170px")
    .style("text-align", "center")
    .style("line-height", "30px")
    .text("tooltip");

var tooltip1 = d3.select("body") //set the tooltip
        .select("#tooltip1")
        // .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .style("color", "#a6a6a6")
        .style("font-size", "70px")
        // .style("background-color", "rgba(0, 0, 0, 0.5)")
        .style("border-radius", "3px")
        .style("font", "Raleway")
        .style("font-weight", "700")
        .style("height", "500px")
        .style("width", "200px")
        .style("text-align", "center")
        .style("line-height", "60px")
        .style("opacity", 0.5)
        .text("tooltip1");


// 1. Modify the dataset
var habbits = [
  {category: "Physics", name: "Physics", value: 4007603, "words": "words random "},
  {category: "Chemistry", name: "Chemistry", value: 4623551},
  {category: "Biology", name: "Biology", alt: "sweating and relaxing", value: 5683806, "words": 'cell life gene expression plant protein'},
  {category: "Psychology", name: "Psychology", alt: "and eating!", value: 2286709},
  {category: "Engineering", name: "Engineering", alt: "♪♫♬", value: 6707634},
  {category: "Forensic engineering", name: "Forensic engineering", alt: "#$#%*&^$#@", value: 2566645},
  {category: "Engineering drawing", name: "Engineering drawing", alt: "watch with friends:D", value: 2021482},

  {category: "Mathematics", name: "Mathematics", value: 2131907},
  {category: "Medicine", name: "Medicine", value: 7032531},
  {category: "Pathology", name: "Pathology", alt: "and eating!", value: 3104917},
  {category: "Surgery", name: "Surgery", alt: "♪♫♬", value: 6707634},
  {category: "Materials Science", name: "Materials Science", alt: "#$#%*&^$#@", value: 2614036},
  {category: "Immunology", name: "Immunology", alt: "watch with friends:D", value: 213070},

  {category: "Simulation", name: "Simulation", alt: "♪♫♬", value: 1877131},
  {category: "Computer Science", name: "Computer Science", alt: "#$#%*&^$#@", value: 3243934, "words": "data simulation computation "},
  {category: "Electronic engineering", name: "Electronic engineering", alt: "watch with friends:D", value: 199936},

  {category: "Cartography", name: "Cartography", alt: "#$#%*&^$#@", value: 2503802},
  {category: "Geography", name: "Geography", alt: "watch with friends:D", value: 1965301},

  {category: "Biochemistry", name: "Biochemistry", alt: "#$#%*&^$#@", value: 2300057},
  {category: "Organic chemistry", name: "Organic chemistry", alt: "watch with friends:D", value: 900013},

  {category: "Political Science", name: "Political Science", alt: "#$#%*&^$#@", value:  1508952},
  {category: "Genetics", name: "Genetics", alt: "watch with friends:D", value: 183721},
  {category: "Optics", name: "Optics", alt: "watch with friends:D", value: 1550725},
  {category: "Quantum Physics", name: "Quantum Physics", alt: "watch with friends:D", value: 1700306},
  {category: "Botany", name: "Botany", alt: "watch with friends:D", value: 1532776},
  {category: "Ecology", name: "Ecology", alt: "watch with friends:D", value:  150230},
  {category: "Art", name: "Art", alt: "watch with friends:D", value:  1575142},
  {category: "Operations Mngmt", name: "Operations Mngmt", alt: "watch with friends:D", value: 1547428},
  {category: "Management", name: "Management", alt: "watch with friends:D", value: 1270451},
  {category: "Economics", name: "Economics", alt: "watch with friends:D", value: 123464},
  {category: "Social Psychology", name: "Social Psychology", alt: "watch with friends:D", value: 123464},
  {category: "Sociology", name: "Sociology", alt: "watch with friends:D", value: 1280847},
  {category: "Telecommunications", name: "Telecommunications", alt: "watch with friends:D", value: 1230051},
  {category: "Pedagogy", name: "Pedagogy", alt: "watch with friends:D", value: 1231000},
  {category: "Stereochemistry", name: "Stereochemistry", alt: "watch with friends:D", value: 129980},
  {category: "Law", name: "Law", alt: "watch with friends:D", value: 1161342},
  {category: "Humanities", name: "Humanities", alt: "watch with friends:D", value: 1041499},
  {category: "Ceramic Materials", name: "Ceramic Materials", alt: "watch with friends:D", value: 1001099},
  {category: "Statistics", name: "Statistics", alt: "watch with friends:D", value: 919267},
  {category: "Chromatography", name: "Chromatography", alt: "watch with friends:D", value: 912267},
  {category: "Nanotech", name: "Nanotech", alt: "watch with friends:D", value: 80873},
  {category: "History", name: "History", alt: "watch with friends:D", value: 879811},
  {category: "Business", name: "Business", alt: "watch with friends:D", value: 809000}
























];

// 2. Change the color of the node when hovered over
var n = svg.selectAll(".node")
    .data(bubble.nodes({children:habbits}).filter(function(d) { return !d.children; }))
  .enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

n.append("circle")
    .attr("r", function(d){return d.r;})
    // .attr("height", function(d){return d.r*2  })
    // .attr("r", function(d) { return d.r; })
    .style("fill", function(d) { return color(d.category); })
    .style("opacity", 0.65)
    .style("stroke", "#404040")
    .style("stroke-width", "0.5px")
    .on("mouseover", function(d) {
            d3.select(this)
            // .style("fill", "#aabbbb");
            .style("opacity", 1)
            tooltip.text(d.value + " papers");
            tooltip.style("visibility", "visible");
            tooltip1.text(d.words);
            tooltip1.style("visibility", "visible");

    })
    .on("mousemove", function() {
        return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
    })
    .on("mouseout", function(){
        d3.select(this).style("opacity", 0.7);
        // tooltip1.text(d.words);
       tooltip.style("visibility", "hidden");
        return tooltip1.style("visibility", "hidden");
    });

// 3. Change the font size tx o be based on node radius
// n.append("text")
//     .attr("dy", ".3em")
//     .style("text-anchor", "middle")
//     .style("pointer-events", "none")
//     .text(function(d) { return d.category; });

n.append("text")
      .text(function(d) { return d.name; })
      .style("font-size", function(d) { return Math.min(2 * d.r, (2 * d.r - 8) / this.getComputedTextLength() * 7) + "px"; })

      .attr("dy", ".35em");

d3.select("body").select("#tooltip1")
    .text("Microsoft Open Graph over 100M papers.")
    .style("visibility", "visible")
    // .style("font-size", "20px")
    // .style("opacity", 1)
    // .style("line-height", "30px")


// Legend to show all the categories in the dataset
var legend = d3.select("#bubble").append("svg").attr("id", "legend");
legend.append("rect").attr("id", "legend1")
    .attr("x", "380").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", color("sports"));
legend.append("text").attr("x", "405").attr("y", "24").attr("font-size", "12px").text("Sports");
legend.append("rect").attr("id", "legend2")
    .attr("x", "510").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", color("food"));
legend.append("text").attr("x", "535").attr("y", "24").attr("font-size", "12px").text("Food");
legend.append("rect").attr("id", "legend3")
    .attr("x", "640").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", color("arts"));
legend.append("text").attr("x", "665").attr("y", "24").attr("font-size", "12px").text("Arts");

// Function to shuffle the colors in the nodele chart
function shuffle_colors(){
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
    }
    shuffle(colors);
    color = d3.scale.category10().range(colors);
    svg.selectAll(".node")
       .select("circle")
       .style("fill", function(d) { return color(d.category); });
    legend.select("#legend1").attr("fill", color("sports"));
    legend.select("#legend2").attr("fill", color("food"));
    legend.select("#legend3").attr("fill", color("arts"));
}

// Function to filter out the nodes based on the user inputs
function filter(category){
    d3.select(".dropbtn").select("#cat").text(category);
    switch(category){
        case 'all':
            svg.selectAll(".node")
               .select("circle")
               .attr("opacity", 1);
            svg.selectAll(".node")
               .select("text")
               .attr("opacity", 1);
            break;
        default:
            svg.selectAll(".node")
               .select("circle")
               .attr("opacity", function(d){ return d.category == category? 1:0;});
            svg.selectAll(".node")
               .select("text")
               .attr("opacity", function(d){ return d.category == category? 1:0;});
            break;
    }
}
