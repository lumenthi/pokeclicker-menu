function menuTab(text, func, imgSrc) {
	let innerHTML = `<div class="inline-elem">`+
				`<p class="menuText">`+text+`</p>`+
				`<img class="menuImg" src="`+imgSrc+`" height="25px" onClick="(`+func+`)()">
			</div>`
	return innerHTML;
}

function displayMenu() {
	let elem = document.createElement("div");
	elem.id = "menuContainer";
	elem.innerHTML = `<div id="menuHeader">Click here to move</div>`

	elem.innerHTML += menuTab("1 000 000", giveMoney, "assets/images/currency/money.svg");
	elem.innerHTML += menuTab("100 000", giveTokens, "assets/images/currency/dungeonToken.svg");
	elem.innerHTML += menuTab("2000", giveQuestPoints, "assets/images/currency/questPoint.svg");
	elem.innerHTML += menuTab("50", giveDiamonds, "assets/images/underground/diamond.svg");
	elem.innerHTML += menuTab("100", givePokeballs, "assets/images/pokeball/Pokeball.svg");
	elem.innerHTML += menuTab("50", giveUltraballs, "assets/images/pokeball/Ultraball.svg");
	elem.innerHTML += menuTab("1", giveMasterball, "assets/images/pokeball/Masterball.svg");

	elem.innerHTML += menuTab("1-Shot Click", oneShotClick, "assets/images/items/Protein.png");
	elem.innerHTML += menuTab("Shinies Only", onlyShinies, "assets/images/oakitems/Shiny_Charm.png");
	elem.innerHTML += menuTab("Always Catch", alwaysCatch, "assets/images/oakitems/Magic_Ball.png");
	elem.innerHTML += menuTab("Auto Click", autoClick, "assets/images/oakitems/Poison_Barb.png");
	elem.innerHTML += menuTab("Gym Farm", gymFarm, "assets/images/profile/trainer-116.png");
	elem.innerHTML += menuTab("Dungeon Farm", dungeonFarm, "assets/images/keyitems/Explorer_kit.png");
	elem.innerHTML += menuTab("Auto Eggs", autoBreed, "assets/images/oakitems/Blaze_Cassette.png");

	document.body.prepend(elem);
}

displayMenu();
dragElement(document.getElementById("menuContainer"));
