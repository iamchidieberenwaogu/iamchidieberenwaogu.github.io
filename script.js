function removeRadius() {
		document.getElementById("myprofilepic").style.borderRadius = "0%";
		document.getElementById("myprofilepic").style.MozBorderRadius = "0%";
	}
	function insertRadius() {
		document.getElementById("myprofilepic").style.borderRadius = "50%";
		document.getElementById("myprofilepic").style.MozBorderRadius = "50%";
	}
	function removeOpacity() {
		document.getElementById("sidepic2").style.opacity = "1";
		document.getElementById("sidepic3").style.opacity = "1";
		document.getElementById("sidepic4").style.opacity = "1";
		document.getElementById("sidepic").style.opacity = "1";
	}
	function addOpacity() {
		document.getElementById("sidepic2").style.opacity = "0.1";
		document.getElementById("sidepic3").style.opacity = "0.1";
		document.getElementById("sidepic4").style.opacity = "0.1";
		document.getElementById("sidepic").style.opacity = "1";
	}
	function addOpacity2() {
		document.getElementById("sidepic").style.opacity = "0.1";
		document.getElementById("sidepic3").style.opacity = "0.1";
		document.getElementById("sidepic4").style.opacity = "0.1";
		document.getElementById("sidepic2").style.opacity = "1";
	}
	function addOpacity3() {
		document.getElementById("sidepic").style.opacity = "0.1";
		document.getElementById("sidepic2").style.opacity = "0.1";
		document.getElementById("sidepic4").style.opacity = "0.1";
		document.getElementById("sidepic3").style.opacity = "1";
	}
	function addOpacity4() {
		document.getElementById("sidepic").style.opacity = "0.1";
		document.getElementById("sidepic2").style.opacity = "0.1";
		document.getElementById("sidepic3").style.opacity = "0.1";
		document.getElementById("sidepic4").style.opacity = "1";
	}
	function changeBackground() {
		document.getElementById("mainsite").style.backgroundColor = "#EEEEEE";
	}
	function changeBackground2() {
		document.getElementById("mainsite").style.backgroundColor = "#333333";
	}
	function toggleDisplay() {
    	var displaySetting = document.getElementById('firstcontent').style.display;
    	if (displaySetting == 'block') {
      		document.getElementById('firstcontent').style.display = 'none';
      		document.getElementById('firstman').style.backgroundColor = "#2F969F";
      		document.getElementById('firstman').style.color = "#FFFFFF";
    	}
    	else {
      		document.getElementById('firstcontent').style.display = 'block';
      		document.getElementById('firstman').style.backgroundColor = "#3BBBC6";
      		document.getElementById('firstman').style.color = "#000000";
    	}
 	}
 	function toggleDisplay2() {
    	var displaySetting = document.getElementById('firstcontent2').style.display;
    	if (displaySetting == 'block') {
      		document.getElementById('firstcontent2').style.display = 'none';
      		document.getElementById('firstman2').style.backgroundColor = "#2F969F";
      		document.getElementById('firstman2').style.color = "#FFFFFF";
    	}
    	else {
      		document.getElementById('firstcontent2').style.display = 'block';
      		document.getElementById('firstman2').style.backgroundColor = "#3BBBC6";
      		document.getElementById('firstman2').style.color = "#000000";
    	}
 	}
 	function toggleDisplay3() {
    	var displaySetting = document.getElementById('firstcontent3').style.display;
    	if (displaySetting == 'block') {
      		document.getElementById('firstcontent3').style.display = 'none';
    	}
    	else {
      		document.getElementById('firstcontent3').style.display = 'block';
    	}
 	}