function giveMoney() {
	if (typeof App !== 'undefined' && typeof App.game !== 'undefined'
	&& typeof App.game.wallet !== 'undefined') {
		App.game.wallet.gainMoney(100000, true);
		Notifier.notify({message: 'MENU ACTIVATED',
                	type: NotificationConstants.NotificationOption.success,
                	sound: NotificationConstants.NotificationSound.General.new_catch,
                	setting: NotificationConstants.NotificationSetting.General.new_catch,}
		);
	}
}

function giveTokens() {
	if (typeof App !== 'undefined' && typeof App.game !== 'undefined'
	&& typeof App.game.wallet !== 'undefined') {
		App.game.wallet.gainDungeonTokens(2500, true);
		Notifier.notify({message: 'MENU ACTIVATED',
                	type: NotificationConstants.NotificationOption.success,
                	sound: NotificationConstants.NotificationSound.General.new_catch,
                	setting: NotificationConstants.NotificationSetting.General.new_catch,}
		);
	}
}

function giveDiamonds() {
	if (typeof App !== 'undefined' && typeof App.game !== 'undefined'
	&& typeof App.game.wallet !== 'undefined') {
		App.game.wallet.gainDiamonds(50, true);
		Notifier.notify({message: 'MENU ACTIVATED',
                	type: NotificationConstants.NotificationOption.success,
                	sound: NotificationConstants.NotificationSound.General.new_catch,
                	setting: NotificationConstants.NotificationSetting.General.new_catch,}
		);
	}
}

function giveQuestPoints() {
	if (typeof App !== 'undefined' && typeof App.game !== 'undefined'
	&& typeof App.game.wallet !== 'undefined') {
		App.game.wallet.gainQuestPoints(1000, true);
		Notifier.notify({message: 'MENU ACTIVATED',
                	type: NotificationConstants.NotificationOption.success,
                	sound: NotificationConstants.NotificationSound.General.new_catch,
                	setting: NotificationConstants.NotificationSetting.General.new_catch,}
		);
	}
}

function givePokeballs() {
	ItemList['Pokeball'].gain(100);
	Notifier.notify({message: 'MENU ACTIVATED',
                type: NotificationConstants.NotificationOption.success,
                sound: NotificationConstants.NotificationSound.General.new_catch,
                setting: NotificationConstants.NotificationSetting.General.new_catch,}
	);
}

function giveUltraballs() {
	ItemList['Ultraball'].gain(50);
	Notifier.notify({message: 'MENU ACTIVATED',
                type: NotificationConstants.NotificationOption.success,
                sound: NotificationConstants.NotificationSound.General.new_catch,
                setting: NotificationConstants.NotificationSetting.General.new_catch,}
	);
}

function giveMasterball() {
	ItemList['Masterball'].gain(1);
	Notifier.notify({message: 'MENU ACTIVATED',
                type: NotificationConstants.NotificationOption.success,
                sound: NotificationConstants.NotificationSound.General.new_catch,
                setting: NotificationConstants.NotificationSetting.General.new_catch,}
	);
}

function onlyShinies() {
	if (typeof App.game.shinies == 'undefined')
		App.game.shinies = 0;

	if (App.game.shinies == 0) {
		PokemonFactory.generateShiny=function(chance,skipBonus=false){return true;};
		App.game.shinies = 1;
		Notifier.notify({message: 'MENU ACTIVATED',
                	type: NotificationConstants.NotificationOption.success,
                	sound: NotificationConstants.NotificationSound.General.new_catch,
                	setting: NotificationConstants.NotificationSetting.General.new_catch,}
		);
	}
	else {
		PokemonFactory.generateShiny=function(chance, skipBonus = false) {const bonus=skipBonus?1:App.game.multiplier.getBonus('shiny');if (Rand.chance(chance/bonus)){App.game.oakItems.use(OakItemType.Shiny_Charm);return true;}return false;}
		App.game.shinies = 0;
		Notifier.notify({message: 'MENU DEACTIVATED',
                	type: NotificationConstants.NotificationOption.danger,
                	sound: NotificationConstants.NotificationSound.General.battle_item_timer,
                	setting: NotificationConstants.NotificationSetting.General.new_catch,}
		);
	}
}

function alwaysCatch() {
	if (typeof App.game.catch == 'undefined')
		App.game.catch = 0;

	if (App.game.catch == 0) {
		Battle.attemptCatch=function(ennemyPokemon){this.catchPokemon(ennemyPokemon);this.catching(false);this.catchRateActual(null);}
		App.game.catch = 1;
		Notifier.notify({message: 'MENU ACTIVATED',
                	type: NotificationConstants.NotificationOption.success,
                	sound: NotificationConstants.NotificationSound.General.new_catch,
                	setting: NotificationConstants.NotificationSetting.General.new_catch,}
		);
	}
	else {
		Battle.attemptCatch=function(a){null!=a?(Rand.chance(this.catchRateActual()/100)?this.catchPokemon(a):a.shiny?App.game.logbook.newLog(LogBookTypes.ESCAPED,`The Shiny ${a.name} escaped!`):App.game.party.alreadyCaughtPokemon(a.id)||App.game.logbook.newLog(LogBookTypes.ESCAPED,`The wild ${a.name} escaped!`),this.catching(!1),this.catchRateActual(null)):this.catching(!1)}	
		App.game.catch = 0;
		Notifier.notify({message: 'MENU DEACTIVATED',
                	type: NotificationConstants.NotificationOption.danger,
                	sound: NotificationConstants.NotificationSound.General.battle_item_timer,
                	setting: NotificationConstants.NotificationSetting.General.new_catch,}
		);
	}
}


function oneShotClick() {
	if (typeof App.game.shotClick == 'undefined')
		App.game.shotClick = 0;

	if (App.game.shotClick == 0) {
		Battle.clickAttack=function(){var t;if(App.game.challenges.list.disableClickAttack.active()&&player.starter()!=GameConstants.Starter.None)return;const e=Date.now();this.lastClickAttack>e-50||(this.lastClickAttack=e,(null===(t=this.enemyPokemon())||void 0===t?void 0:t.isAlive())&&(GameHelper.incrementObservable(App.game.statistics.clickAttacks),this.enemyPokemon().damage(App.game.party.calculateClickAttack(!0)),this.enemyPokemon().isAlive(),this.defeatPokemon()))};
		App.game.shotClick = 1;
		Notifier.notify({message: 'MENU ACTIVATED',
                	type: NotificationConstants.NotificationOption.success,
                	sound: NotificationConstants.NotificationSound.General.new_catch,
                	setting: NotificationConstants.NotificationSetting.General.new_catch,}
		);
	}
	else {
		Battle.clickAttack=function(){var t;if(App.game.challenges.list.disableClickAttack.active()&&player.starter()!=GameConstants.Starter.None)return;const e=Date.now();this.lastClickAttack>e-50||(this.lastClickAttack=e,(null===(t=this.enemyPokemon())||void 0===t?void 0:t.isAlive())&&(GameHelper.incrementObservable(App.game.statistics.clickAttacks),this.enemyPokemon().damage(App.game.party.calculateClickAttack(!0)),this.enemyPokemon().isAlive()||this.defeatPokemon()))};
		App.game.shotClick = 0;
		Notifier.notify({message: 'MENU DEACTIVATED',
                	type: NotificationConstants.NotificationOption.danger,
                	sound: NotificationConstants.NotificationSound.General.battle_item_timer,
                	setting: NotificationConstants.NotificationSetting.General.new_catch,}
		);
	}
}

function autoClick() {
	if (typeof App.game.autoClick == 'undefined')
		App.game.autoClick = 0;

	if (App.game.autoClick == 0) {
		App.game.intervalId = window.setInterval(function(){Battle.clickAttack();}, 100);
		App.game.autoClick = 1;
		Notifier.notify({message: 'MENU ACTIVATED',
                	type: NotificationConstants.NotificationOption.success,
                	sound: NotificationConstants.NotificationSound.General.new_catch,
                	setting: NotificationConstants.NotificationSetting.General.new_catch,}
		);
	}
	else {
		clearInterval(App.game.intervalId);
		App.game.autoClick = 0;
		Notifier.notify({message: 'MENU DEACTIVATED',
                	type: NotificationConstants.NotificationOption.danger,
                	sound: NotificationConstants.NotificationSound.General.battle_item_timer,
                	setting: NotificationConstants.NotificationSetting.General.new_catch,}
		);
	}
}
