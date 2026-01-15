/* Name this external file gallery.js */

// ============================
// IMAGE PREVIEW
// ============================
function upDate(previewPic){
	console.log("upDate déclenchée");

	console.log("ALT :", previewPic.alt);
	console.log("SRC :", previewPic.src);

	const imageDiv = document.getElementById("image");
	imageDiv.innerHTML = previewPic.alt;
	imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo(){
	console.log("unDo déclenchée");

	const imageDiv = document.getElementById("image");
	imageDiv.style.backgroundImage = "url('')";
	imageDiv.innerHTML =
		"Survolez une image ci-dessous pour l'afficher ici.";
}

// ============================
// ACCESSIBILITÉ CLAVIER
// ============================
function addTabFocus(){
	console.log("Page chargée : addTabFocus exécutée");

	let images = document.querySelectorAll(".preview");

	// boucle for pour ajouter tabindex
	for(let i = 0; i < images.length; i++){
		images[i].setAttribute("tabindex", "0");
		console.log("tabindex ajouté à l’image", i);
	}
}
