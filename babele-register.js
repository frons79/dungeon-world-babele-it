
Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
		
		Babele.get().register({
			module: 'dungeon-world-babele-it',
			lang: 'it',
			dir: 'compendium'
		});
	}
});