/**
 * BLOCK: lwhhdbd
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

import { STYLES, getStyleNameFromClasses } from './helper.js';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const { PlainText }	= wp.editor;

const { RichText }	= wp.editor;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/button', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'KM Button' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Button' ),
		__( 'Btn' ),
		__( 'BS Button' ),
	],
	styles : STYLES,
	attributes : {
		style : {
			type : 'string'
		},
		content : {
			type : 'html',
			selector : 'div'
		}
	},
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit( { className, setAttributes, attributes, isSelected } ) {
		// Creates a <p class='wp-block-cgb-block-lwhhdbd'></p>.
		let style = getStyleNameFromClasses(STYLES, className);
		setAttributes({style});
		return (

			<RichText
				multiline = {true}
				placeholder= {__('Please add alert message...')}
				tagName="button"
				className={`${className} btn btn-${style}`}
				value={ attributes.content }
				onChange={ ( content ) => setAttributes( { content } ) }
			/>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save({ attributes } ) {
		return (

			<RichText.Content className={`btn btn-${attributes.style}`} tagName="button" value={ attributes.content } />
		);
	},
} );
