const commando = require('discord.js-commando');

module.exports = class DankCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'search',
			group: 'how_to_win_an_arguement',
			memberName: 'search',
			description: 'Checks whether the argument provided is dank.',

			args: [
				{
					key: 'dank',
					label: 'dank',
					prompt: 'Say dank.',
					type: 'dank'
				}
			]
		});
	}

	run(msg, { dank }) {
		return msg.reply(dank);
	}
};
