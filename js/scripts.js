(function(d){
	"use strict";

	// Document objects
	var navIcon = d.getElementById("navIcon"),
	nav = d.getElementsByClassName("nav")[0];

	// Document events
	navIcon.addEventListener("click", function(){
		nav.classList.toggle("show");
	});

	// Scroll
	d.addEventListener("scroll", function(){
		if(d.getElementsByClassName("show").length > 0){
			nav.classList.remove("show");
		}
	});
})(document);