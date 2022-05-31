const card = document.querySelectorAll(".card");

for (cards of card ){
	cards.addEventListener('mouseover', function(event){
		if (event.target.id === "icon") {
			event.target.style.height = "100px";
			event.target.style.width = "100px";
			return;
		}
	});
		cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "icon") {
           	event.target.style.height = "80px";
           	event.target.style.width = "80px";
            return;
        }
	});
}