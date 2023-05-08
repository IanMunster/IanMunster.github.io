// Filter Selection Script
// Start with Showing All
FilterSelection ('all')

// Filter Selection Function
function FilterSelection(filterName) {
    var columnElements, columnCount;
    columnElements = document.getElementsByClassName("filter-column");
    //default all filter
    if (filterName == "all") {
        filterName = "";
    }
    // Remove Show Class from non-selected Columns 
    // and Add Show class to Filtered Columns
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
