
function calculateGears()
{
  // Convert the strings to arrays of (valid) integers
  rStrings = chainring.value.split(" ")
  rings = new Array
  for (i = 0; i < rStrings.length; i++)
    if(!isNaN(parseInt(rStrings[i])))
      rings.push(parseInt(rStrings[i]))

  cStrings = cassette.value.split(" ")
  cogs = new Array
  for (i = 0; i < cStrings.length; i++)
    if(!isNaN(parseInt(cStrings[i])))
      cogs.push(parseInt(cStrings[i]))

  // Sort the arrays
  function compare(a,b) { return a - b }
  rings = rings.sort(compare)
  cogs = cogs.sort(compare)

  // Allocate an array for all of the ratios
  ratios = new Array(rings.length * cogs.length)

  // Now loop through all combinations and calculate the ratios
  for(i = 0; i < rings.length; i++) {
    for(j = 0; j < cogs.length; j++) {
      r = parseInt(rings[i]) / parseInt(cogs[j])
      key = rings[i] + '-' + cogs[j]
      ratios[i * cogs.length + j] = {"ratio": r, "ring": i, "key": key}
    }
  }

  // Now it's time for the pretty drawing

  // Get the SVG object
  var svg = d3.select("div.output svg")

  // Calculate the ranges for the data
  var y = d3.scale.linear()
    .domain([rings[0] / cogs[cogs.length -1] * 0.7,
             rings[rings.length - 1] / cogs[0] * 1.05])
    .range([0, svg.attr("height")])

  // Calculate ranges for the color
  var colorInterp = d3.interpolateHsl("#00d000", "#ff0000")

  // Grab the bars and assign them the ratios
  // TODO maybe can't select all rects?
  var bars = svg.selectAll("rect")
    .data(ratios, function(d){ return d.key })

  var barWidth = 40
  var barHeight = 3

  // New bars are created to the left and slide in
  bars.enter().append("rect")
    .attr("x", -barWidth)
    .attr("y", function(d,i){ return y(d.ratio) })
    .attr("width", barWidth)
    .attr("height", barHeight)
    .style("fill", function(d,i){ return colorInterp(d.ring/(rings.length-1)) })

  bars.transition()
    .duration(500)
    .attr("y", function(d,i){ return y(d.ratio) })
    .attr("x", function(d,i){ return d.ring * barWidth + 50 })
    .style("fill", function(d,i){ return colorInterp(d.ring/(rings.length-1)) })
    // Size stays the same

  bars.exit().transition()
    .duration(500)
    .attr("x", -barWidth)
    .remove()

  // Now the labels
  labelPos = barWidth * rings.length + 80

  var labels = svg.selectAll("text")
    .data(ratios, function(d){ return d.key })

  labels.enter().append("text")
    .attr("x", labelPos)
    .attr("y", function(d,i){ return y(d.ratio) })
    .attr("opacity", 0)
    .attr("font-size", 12)
    .text(function(d,i){ return d.ratio.toFixed(2) })

  labels.transition()
    .attr("x", labelPos)
    .attr("y", function(d,i){ return y(d.ratio) })
    // Text stays the same
    .duration(500)
    .attr("opacity", 1)

  labels.exit().transition()
    .duration(500)
    .attr("opacity", 0)
    .remove()

}

