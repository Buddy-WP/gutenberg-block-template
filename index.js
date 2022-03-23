/**
 * External dependencies
 */
const { join } = require( 'path' );

module.exports = {
	defaultValues: {
		slug: 'gutenbuddy',
		category: 'text',
		title: 'GutenBuddy',
		description:
			'A demo Buddy block ',
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