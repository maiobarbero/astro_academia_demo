interface Profile {
	fullName: string
	title: string
	institute: string
	author_name: string
	research_areas: { title: string; description: string; field: string }[]
}

export const profile: Profile = {
 fullName: 'Marie Curie',
 title: 'Dr.',
 institute: 'University of Paris (Sorbonne)',
 author_name: 'Marie Curie',
 research_areas: [
  { title: 'Radioactivity', description: 'Experimental study of radiation emitted by uranium and other substances.', field: 'physics' },
  { title: 'Radiochemistry', description: 'Identification and study of polonium, radium, and radioactive compounds.', field: 'chemistry' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: '',
	linkedin: '',
  x: '',
	bluesky: '',
	github: '',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
	orcid: '',
}

export const template = {
  website_url: 'https://example.com', // Demo URL; replace when deploying.
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
  default_title: 'Marie Skłodowska Curie | Research Archive',
  default_description: 'A sample academic website featuring Marie Skłodowska Curie’s research, publications, and biography.',
	default_image: '/images/astro-academia.png',
}
