// <div class="container">
//   <h1>Hello World</h1>
//   <div class="example"></div>
//   <div class="example"></div>
//   <div class="example"></div>
// </div>

// make an update to the text
d3.selectAll('.example')
  .data([ 'hello', 'world', 'diggins' ])
  .text(function(d) { return d });

// remove non-data bound elements
d3.selectAll('.example')
  .data([ 'hello', 'world' ])
  .exit()
  .text("NOOOOOOOOOOooOooooooo........")
  .transition()
  .duration(1500)
  .style('opacity', 0);

// add another div for data-bound enter selection
d3.select('.container')
  .selectAll('.example')
  .data([ 'hello', 'world', 'diggins', 'yolo' ])
  .enter()
  .append('div')
  .attr('class', 'example');

// add another div for data-bound enter selection
d3.select('.container')
  .selectAll('.example')
  .data([ 'hello', 'world', 'diggins', 'yolo' ])
  .text(function(d) { return d; })
  .enter()
  .append('div')
  .attr('class', 'example')
  .text(function(d) { return d; })
