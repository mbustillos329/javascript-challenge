// from data.js
var tableData = data;

// YOUR CODE HERE!
// reference to the table body
var tbody = d3.select("tbody");


console.log(data);

data.forEach(function(UFO) {
  console.log(UFO);
  var row = tbody.append("tr");
  Object.entries(UFO).forEach(function([key, value]) {
    console.log(key, value);

    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("datetime.form-control");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(date);

  var filteredData = ufo.filter(date => date.datetime === inputValue);

  console.log(filteredData);
}