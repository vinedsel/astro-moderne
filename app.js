
// Search Engine

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElement("stack");
  li = ul.getElementsByTagName("h4");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("article")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// Tax function

// $('#stack').on('click', '.calc', function taxFunction() {
//   var curRow = $(this).closest("article");
//   var col1 = parseInt(curRow.find(".value2").html());
//   var finPrice = col1 * '.08';
//   var combPrice = col1 + finPrice;
//   alert('$' + combPrice + '.00');
// });


$(".calc").click(function() {
  var curRow = $(this).closest("article");
  var col1 = parseInt(curRow.find(".value2").html());
  var finPrice = col1 * '.08';
  var combPrice = col1 + finPrice;
  alert('$' + combPrice + '.00');
});