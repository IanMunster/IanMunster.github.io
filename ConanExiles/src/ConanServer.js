/* Conan Exiles Server Guide JavaScript 
*
* Show/Hide Element by ID, Show/Hide Elements by Class, Highlight Table Row
*/

/*Show and Hide Element by ID on Click*/
function showHide(id, show) {
	var elem = document.getElementById(id);
	if ( elem.style.display == "flex" && show === 0) { elem.style.display = "none"; return; } 
	else { elem.style.display = "flex"; return; }
}

/*Show and Hide Element(s) by Class on Click*/
function showHideMult (name, show) {
	var elems = document.getElementsByClassName(name);
	for ( var i = 0; i < elems.length; i++ ) {
		if (show === 0) { elems[i].style.display = "none"; }
		else { elems[i].style.display = "block"; }
	}
}

/*Highlight Table Row on Click*/
function highlightRow(e) {
	var table = document.getElementById(e), cells = table.getElementsByTagName('td');
	for (var c = 0; c < cells.length; c++) {
		var cell = cells[c];
		cell.onclick = function () {
			var rowId = this.parentNode.rowIndex, rowsNotSelected = table.getElementsByTagName('tr'), rowSelected = table.getElementsByTagName('tr')[rowId];
			for (var r = 0; r < rowsNotSelected.length; r++) {
				rowsNotSelected[r].classList.remove('selected');
			}
			rowSelected.className += " selected";
		}
	}
}