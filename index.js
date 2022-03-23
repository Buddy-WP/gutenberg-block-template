/**
 * External dependencies
 */
const { join } = require( 'path' );
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const args = process.argv.slice(2).map(arg => arg.split('='))
.reduce((args, [value, key]) => {
	args[value] = key;
	return args;
}, {});

module.exports = {
	defaultValues: {
		slug: 'gutenpride',
		category: 'text',
		title: 'Gutenpride',
		updateURI: args.foo,
		description:
			'A Gutenberg block to show your pride! This block enables you to type text and style it with the color font Gilbert from Type with Pride.',
		dashicon: 'flag',
		attributes: {
			message: {
				type: 'string',
				source: 'text',
				selector: 'div',
			},
		},
		supports: {
			html: false,
		},
	},
	pluginTemplatesPath: join( __dirname, 'plugin-templates' ),
	blockTemplatesPath: join( __dirname, 'block-templates' ),
	assetsPath: join( __dirname, 'assets' ),
};