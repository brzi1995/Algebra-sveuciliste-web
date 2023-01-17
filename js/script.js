document.addEventListener("DOMContentLoaded",function(){
	var gumb = document.getElementById("menu-icon");
	var stavke = document.querySelectorAll("#navigacija ul li");
	gumb.addEventListener("click", function(){
		for(let i = 0; i < stavke.length; i++){
			stavke[i].classList.toggle("prikazi");
		}
	});
});