export const STYLES = [
		{
			name : 'primary',
			label: 'Primary',
			isDefault: true,
		},
		{
			name	: 'secondary',
			label	: 'Secondary',
		},
		{
			name	: 'success',
			label	: 'Success',
		},
		{
			name	: 'danger',
			label	: 'Danger',
		},
		{
			name	: 'warning',
			label	: 'Warning',
		},
		{
			name	: 'info',
			label	: 'Info'
		},
		{
			name	: 'light',
			label	: 'Light',
		},
		{
			name	: 'dark',
			label	: 'Dark',
		},
		{
			name	: 'link',
			label	: 'Link',
		}


	];


export function getStyleNameFromClasses(styles, classes){
	let style = (classes && styles.find(style => classes.includes(style.name)));

	return (style ? style.name : 'primary');
}	