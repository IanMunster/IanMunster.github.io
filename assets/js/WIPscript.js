/* 
VARIABLES
 	--bg-color0: #1e2021;
	--bg-color1: #1c1c1c;
	--bg-element0: rgba(100,100,100,0.5);
	--primary-color: #49df49;
	--secondary-color: #4756df;
	--primary-shadow: #95b08d;
	--secondary-shadow: #8b8eaf;
	--font-color0: #dedcd9;
	--font-color1: #fff;
*/


/* ThemeColorChange Section */
/* (Duplicate in Project) const themeBtn = document.querySelector ("#ThemeSwitchBtn"); */
themeBtn.addEventListener("change", () => {
	document.body.classList.toggle ("dark");
});
/* END ThemeColorChange Section */