function myFunction() {
  var input, filter, table, tr, tds, i, ii;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.querySelectorAll("tbody tr:not(.header)");
  for (i = 0; i < tr.length; i++) {
    tds = tr[i].getElementsByTagName("td");
    var found = false;
    for (ii = 0; ii < tds.length && !found; ii++) {
      if (tds[ii].textContent.toUpperCase().indexOf(filter) > -1) {
        found = true;
        break;
      }
    }
    tr[i].style.display = found ? "" : "none";
  }
}
