/* Read More Filter Function */
FilterSelection("aboutProjects")
function FilterSelection(filterName) {
    var columnElements, columnCount;
    columnElements = document.getElementsByClassName("gridColumn");
    if (filterName == "allFilter") {
        filterName = "";
    }
    for (columnCount = 0; columnCount < columnElements.length; columnCount++) {
        FilterRemoveClass(columnElements[columnCount], "show");
        if (columnElements[columnCount].className.indexOf(filterName) > -1) {
            FilterAddClass(columnElements[columnCount], "show");
        }
    }
}
// Add to Filter Class
function FilterAddClass (element, name) {
	var nameCount, elementsArr, nameArr;
	elementsArr = element.className.split(" ");
	nameArr = name.split(" ");
	for (nameCount=0; nameCount < nameArr.length; nameCount++) {
		if (elementsArr.indexOf(nameArr[nameCount]) == -1) {
			element.className += " " + nameArr[nameCount];
		}
	}
}
// Remove from Filter Class
function FilterRemoveClass (element, name) {
	var nameCount, elementsArr, nameArr;
	elementsArr = element.className.split(" ");
	nameArr = name.split(" ");
	for (nameCount=0; nameCount < nameArr.length; nameCount++) {
		while (elementsArr.indexOf(nameArr[nameCount]) > -1) {
			elementsArr.splice(elementsArr.indexOf(nameArr[nameCount]), 1);
		}
	}
	element.className = elementsArr.join(" ");
}

// Add Active Highlight BTN
var btnContainer = document.getElementById("FilterBtns"),
	filterBtns = document.getElementsByClassName("btnFilter");
for (var i = 0; i < filterBtns.length; i++) {
	filterBtns[i].addEventListener('click', function () {
		var currentBtn = document.getElementsByClassName("active");
		currentBtn[0].className = currentBtn[0].className.replace(" active", "");
		this.className += " active";
	});
}

/* END Read More Filter Function */