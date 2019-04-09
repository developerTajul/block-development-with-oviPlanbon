/**
 * BLOCK: lwhhdbd
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const { RichText, InspectorControls } = wp.editor;
const { PanelBody, SelectControl }	= wp.components;

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
registerBlockType( 'cgb/card', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Card' ), // Block title.
	icon: 'yes', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Card' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		title : {
			type : 'string',
		},
		content : {
			type : 'string',
		},
		label : {
			type : 'string',
		},
		btn_text : {
			type : 'string',
		},
		label_position : {
			type : 'string',
			default: 'top-right'
		},

	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit( { attributes, setAttributes } ) {
		const { title, content, label, btn_text, label_position } = attributes;
		return (
			<div className="lwhh-card">
				<InspectorControls>
					<PanelBody
			            title= { __('Label')}
			            initialOpen={ true }
				    >

					    <SelectControl
					        label={ __( 'Label Position' ) }
					        value={ label_position } 
					        onChange={ ( position ) => setAttributes({ label_position: position}) }
					        options={ [
					            { value: 'top-left', 		label: 'Top Left' },
								{ value: 'top-center', 		label: 'Top Center' },
								{ value: 'top-right', 		label: 'Top Right' },
								{ value: 'middle-left', 	label: 'Middle Left' },
								{ value: 'middle-center', 	label: 'Middle Center' },
								{ value: 'middle-right', 	label: 'Middle Right' },
								{ value: 'bottom-left', 	label: 'Bottom Left' },
								{ value: 'bottom-center', 	label: 'Bottom Center' },
								{ value: 'bottom-right', 	label: 'Bottom Right' },
					        ] }
					    />

					</PanelBody>
				</InspectorControls>

				<div className="lwhh-card-figure">
					<img src="https://via.placeholder.com/400x200?text=LWHH Gutenberg Course" alt="..." />
					<div className={`lwhh-label lwhh-label--${label_position}`}>
						<RichText
							multiline= { false }
							value={ attributes.label }
							placeholder= { __("Add Label")}
							onChange={ ( label ) => setAttributes( { label } ) }
							keepPlaceholderOnFocus={ true}
						/>
					</div>
				</div>
				<div className="lwhh-card-body">
					<h2 className="lwhh-card-title">
						<RichText
							multiline= { false }
							value={ attributes.title }
							placeholder= { __("Add Title")}
							onChange={ ( title ) => setAttributes( { title } ) }
							keepPlaceholderOnFocus={ true}
						/>
					</h2>

					<div className="lwhh-card-text">
						<p>
							<RichText
								multiline= { false }
								value={ attributes.content }
								placeholder= { __("Add Content")}
								onChange={ ( content ) => setAttributes( { content } ) }
								keepPlaceholderOnFocus={ true}
							/>
						</p>
					</div>
					<a href="#" className="lwhh-card-btn">
						<RichText
							multiline= { false }
							value={ attributes.btn_text }
							placeholder= { __("Add Button")}
							onChange={ ( btn_text ) => setAttributes( { btn_text } ) }
							keepPlaceholderOnFocus={ true}
						/>
					</a>
				</div>
			</div>
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
	save( props ) {
		return (
			<div>
				<p>— Hello from the frontend.</p>
				<p>
					CGB BLOCK: <code>lwhhdbd</code> is a new Gutenberg block.
				</p>
				<p>
					It was created via{ ' ' }
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>.
				</p>
			</div>
		);
	},
} );