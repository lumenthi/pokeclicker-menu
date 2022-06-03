function giveMoney() {
	if (typeof App !== 'undefined' && typeof App.game !== 'undefined'
	&& typeof App.game.wallet !== 'undefined') {
		App.game.wallet.gainMoney(1000000, true);
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
		App.game.wallet.gainDungeonTokens(100000, true);
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
		App.game.wallet.gainQuestPoints(2000, true);
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
		PokemonFactory.generateShiny=function(chance, skipBonus = false) {
			App.game.oakItems.use(OakItemType.Shiny_Charm);
			return true;
		}
		App.game.shinies = 1;
		Notifier.notify({message: 'MENU ACTIVATED',
                	type: NotificationConstants.NotificationOption.success,
                	sound: NotificationConstants.NotificationSound.General.new_catch,
                	setting: NotificationConstants.NotificationSetting.General.new_catch,}
		);
	}
	else {
		PokemonFactory.generateShiny=function(chance, skipBonus = false){const bonus=skipBonus?1:App.game.multiplier.getBonus('shiny');if (Rand.chance(chance/bonus)){App.game.oakItems.use(OakItemType.Shiny_Charm);return true;}return false;}
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

function dungeonFarm(index=-1) {
	if (index != -1 && (index == -2 || index >= App.game.run.length)) {
		if (DungeonRunner.initializeDungeon(DungeonRunner.dungeon) == false) {
			App.game.dungFarm = 0;
			return;
		}

		DungeonRunner.map.moveToTile=function(point) {
			if (this.hasAccesToTile(point) || App.game.dungFarm == 1) {
				this.currentTile().hasPlayer = false;
				this.playerPosition(point);
				if (this.flash) {
					this.nearbyTiles(point).forEach(t => t.isVisible = true);
				}
				this.currentTile().hasPlayer = true;
				this.currentTile().isVisible = true;
				this.currentTile().isVisited = true;
				if (this.currentTile().type() == GameConstants.DungeonTile.enemy) {
					DungeonBattle.generateNewEnemy();
				}
				return true;
			}
			return false;
		}
		let map = DungeonRunner.map.board();
		let x = 0;
		let y = 0;

		let chests = [];
		let monsters = [];
		let boss = [];
		let run = [];

		while (map[x]) {
			while (map[x][y]) {
				if (map[x][y].type() == 3) // CHEST
					chests.push([x, y, 3]);
				else if (map[x][y].type() == 2) // MONSTERS
					monsters.push([x, y, 2]);
				else if (map[x][y].type() == 4) // BOSS
					boss.push([x, y, 4]);
				y++;
			}
			y = 0;
			x++;
		}
		run = run.concat(monsters);
		run = run.concat(chests);
		run = run.concat(boss);
		App.game.run = run;
		dungeonFarm(0);
		return;
	}
	if (index > -1) {
			DungeonRunner.map.moveToCoordinates(App.game.run[index][1], App.game.run[index][0]);
			if (App.game.run[index][2] == 3) {
				DungeonRunner.handleClick = function () {
					if (DungeonRunner.fighting() && !DungeonBattle.catching()) {
						DungeonBattle.clickAttack();
					}
					else if (DungeonRunner.map.currentTile().type() === GameConstants.DungeonTile.entrance) {
						DungeonRunner.dungeonLeave();
					}
					else if (DungeonRunner.map.currentTile().type() === GameConstants.DungeonTile.chest) {
						DungeonRunner.openChest();
						if (App.game.dungFarm == 1)
							dungeonFarm(++index);
					}
					else if (DungeonRunner.map.currentTile().type() === GameConstants.DungeonTile.boss && !DungeonRunner.fightingBoss()) {
						DungeonRunner.startBossFight();
					}
				}
			}
			else {
				DungeonBattle.defeatTrainerPokemon = function () {
					this.enemyPokemon().defeat(true);
					GameHelper.incrementObservable(this.trainerPokemonIndex);
					App.game.breeding.progressEggsBattle(DungeonRunner.dungeon.difficultyRoute, player.region);
					player.lowerItemMultipliers(MultiplierDecreaser.Battle);
					if (this.trainerPokemonIndex() >= this.trainer().team.length) {
						if (this.trainer().options.reward) {
							App.game.wallet.addAmount(this.trainer().options.reward);
						}
						else {
							const dungeonCost = DungeonRunner.dungeon.tokenCost;
							const money = Math.round(dungeonCost * (DungeonRunner.fightingBoss() ? 1 : 0.5));
							App.game.wallet.gainMoney(money, true);
							const tokens = Math.round(dungeonCost * (DungeonRunner.fightingBoss() ? 0.1 : 0.04));
							App.game.wallet.gainDungeonTokens(tokens, true);
						}
						DungeonRunner.fighting(false);
						this.trainer(null);
						this.trainerPokemonIndex(0);
						DungeonRunner.map.currentTile().type(GameConstants.DungeonTile.empty);
						DungeonRunner.map.currentTile().calculateCssClass();
						if (DungeonRunner.fightingBoss()) {
							DungeonRunner.fightingBoss(false);
							DungeonRunner.defeatedBoss(true);
							DungeonRunner.dungeonWon();
							return;
						}
						if (App.game.dungFarm == 1)
							dungeonFarm(++index);
					}
					else {
						this.generateTrainerPokemon();
					}
				}
				DungeonBattle.defeatPokemon = function () {
					const enemyPokemon = this.enemyPokemon();
					if (this.trainer()) {
						this.defeatTrainerPokemon();
						return;
					}
					DungeonRunner.fighting(false);
					if (DungeonRunner.fightingBoss()) {
						DungeonRunner.fightingBoss(false);
						DungeonRunner.defeatedBoss(true);
					}
					enemyPokemon.defeat();
					App.game.breeding.progressEggsBattle(DungeonRunner.dungeon.difficultyRoute, player.region);
					player.lowerItemMultipliers(MultiplierDecreaser.Battle);
					DungeonRunner.map.currentTile().type(GameConstants.DungeonTile.empty);
					DungeonRunner.map.currentTile().calculateCssClass();
					const isShiny = enemyPokemon.shiny;
					const pokeBall = App.game.pokeballs.calculatePokeballToUse(enemyPokemon.id, isShiny);
					if (pokeBall !== GameConstants.Pokeball.None) {
						this.prepareCatch(enemyPokemon, pokeBall);
						setTimeout(() => {
							this.attemptCatch(enemyPokemon);
							if (DungeonRunner.defeatedBoss()) {
								DungeonRunner.dungeonWon();
							}
						}, App.game.pokeballs.calculateCatchTime(pokeBall));
					}
					if (DungeonRunner.defeatedBoss()) {
						DungeonRunner.dungeonWon();
						return;
					}
					if (App.game.dungFarm == 1)
						dungeonFarm(++index);
				}
			}
		return;
	}
	if (typeof App.game.dungFarm == 'undefined')
		App.game.dungFarm = 0;

	if (App.game.dungFarm == 0) {
		App.game.dungFarm = 1;
		if (player.town() instanceof DungeonTown)
			DungeonRunner.initializeDungeon(player.town().dungeon);
		else
			return;
		Notifier.notify({message: 'MENU ACTIVATED',
                	type: NotificationConstants.NotificationOption.success,
                	sound: NotificationConstants.NotificationSound.General.new_catch,
                	setting: NotificationConstants.NotificationSetting.General.new_catch,}
		);
		DungeonRunner.dungeonWon = function () {
			if (!DungeonRunner.dungeonFinished()) {
				DungeonRunner.dungeonFinished(true);
				GameHelper.incrementObservable(App.game.statistics.dungeonsCleared[GameConstants.getDungeonIndex(DungeonRunner.dungeon.name)]);
				MapHelper.moveToTown(DungeonRunner.dungeon.name);
				DungeonRunner.dungeon.rewardFunction();
				Notifier.notify({
					message: 'You have successfully completed the dungeon',
					type: NotificationConstants.NotificationOption.success,
				});
				if (App.game.dungFarm == 1)
					setTimeout(function(){dungeonFarm(-2);}, 100);
			}
		}
		dungeonFarm(-2);
		return;
	}
	else {
		App.game.dungFarm = 0;
		Notifier.notify({message: 'MENU DEACTIVATED',
                	type: NotificationConstants.NotificationOption.danger,
                	sound: NotificationConstants.NotificationSound.General.battle_item_timer,
                	setting: NotificationConstants.NotificationSetting.General.new_catch,}
		);
		return;
	}
}

function gymFarm() {
	if (typeof App.game.gymFarm == 'undefined')
		App.game.gymFarm = 0;

	if (App.game.gymFarm == 0) {
		GymBattle.defeatPokemon = function(){this.enemyPokemon().defeat(!0),App.game.breeding.progressEggsBattle(3*this.gym.badgeReward+1,GameConstants.Region.none),this.index(this.index()+1),this.index()>=this.gym.pokemons.length?(GymRunner.gymWon(this.gym),GymRunner.startGym(this.gym)):this.generateNewEnemy(),player.lowerItemMultipliers(MultiplierDecreaser.Battle)};
		App.game.gymFarm = 1;
		Notifier.notify({message: 'MENU ACTIVATED',
                	type: NotificationConstants.NotificationOption.success,
                	sound: NotificationConstants.NotificationSound.General.new_catch,
                	setting: NotificationConstants.NotificationSetting.General.new_catch,}
		);
	}
	else {
		GymBattle.defeatPokemon = function(){this.enemyPokemon().defeat(!0),App.game.breeding.progressEggsBattle(3*this.gym.badgeReward+1,GameConstants.Region.none),this.index(this.index()+1),this.index()>=this.gym.pokemons.length?(GymRunner.gymWon(this.gym)):this.generateNewEnemy(),player.lowerItemMultipliers(MultiplierDecreaser.Battle)};
		App.game.gymFarm = 0;
		Notifier.notify({message: 'MENU DEACTIVATED',
                	type: NotificationConstants.NotificationOption.danger,
                	sound: NotificationConstants.NotificationSound.General.battle_item_timer,
                	setting: NotificationConstants.NotificationSetting.General.new_catch,}
		);
	}
}

function autoBreed() {
	if (typeof App.game.autoBreed == 'undefined')
		App.game.autoBreed = 0;

	if (App.game.autoBreed == 0) {
		toCall = function () {
			if (App.game.autoBreed == 1)
			if (App.game.breeding.hasFreeEggSlot() || App.game.breeding.hasFreeQueueSlot()) {
				let i = 0;
				let array = PartyController.getHatcherySortedList();
				while (array[i]) {
					if (BreedingController.visible(PartyController.getHatcherySortedList()[i])()) {
						App.game.breeding.addPokemonToHatchery(PartyController.getHatcherySortedList()[i]);
						break;
					}
					i++;
				}
			}
			setTimeout(toCall, 500);
		}
		BreedingController.openBreedingModal();
		toCall();
		App.game.autoBreed = 1;
		Notifier.notify({message: 'MENU ACTIVATED',
			type: NotificationConstants.NotificationOption.success,
			sound: NotificationConstants.NotificationSound.General.new_catch,
			setting: NotificationConstants.NotificationSetting.General.new_catch,}
		);
	}
	else {
		App.game.autoBreed = 0;
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
		App.game.pokeballs.calculateCatchTime = function (ball) {return 0;};
		App.game.intervalId = window.setInterval(function(){
			if (player._route() > 0)
				Battle.clickAttack();
			else if (typeof dungeonList[player._townName] !== 'undefined' && typeof DungeonRunner.map !== 'undefined') {
				if (DungeonRunner.map.currentTile().type() !== GameConstants.DungeonTile.entrance)
					DungeonRunner.handleClick();
			}
			else
				GymBattle.clickAttack();
		}, 75);
		App.game.autoClick = 1;
		Notifier.notify({message: 'MENU ACTIVATED',
                	type: NotificationConstants.NotificationOption.success,
                	sound: NotificationConstants.NotificationSound.General.new_catch,
                	setting: NotificationConstants.NotificationSetting.General.new_catch,}
		);
	}
	else {
		App.game.pokeballs.calculateCatchTime = function (ball) {return this.pokeballs[ball].catchTime;};
		clearInterval(App.game.intervalId);
		App.game.autoClick = 0;
		Notifier.notify({message: 'MENU DEACTIVATED',
                	type: NotificationConstants.NotificationOption.danger,
                	sound: NotificationConstants.NotificationSound.General.battle_item_timer,
                	setting: NotificationConstants.NotificationSetting.General.new_catch,}
		);
	}
}