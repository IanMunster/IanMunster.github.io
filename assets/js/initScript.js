/* INITIALIZE PAGE
NEEDS TO BE LOADED AT PAGE LOAD */
// Uncheck all Checkboxes by Default. (Use for: Theme Switcher, )
var inputs = document.getElementsByTagName('input');

for (var i=0; i<inputs.length; i++)  {
  if (inputs[i].type == 'checkbox')   {
    inputs[i].checked = false;
  }
}
/* END OF INITIALIZE */