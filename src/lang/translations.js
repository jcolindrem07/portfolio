import { SIMPLE_NAME as name } from '../assets/data/contact';

// One object per language, same shape on both sides
export const translations = {
	en: {
		resume: 'Resume',
		nav: {
			about: 'About',
			skills: 'Technologies',
			experience: 'Experience',
			projects: 'Projects',
			contact: 'Contact',
		},
		hero: {
			role: 'Software Developer',
			heading: `Hi, I'm ${name}.`,
			tagline:
				'Systems engineer with experience building web applications and software quality assurance (QA).',
			cta: 'View my work',
			contact_btn: 'Contact',
			resume_btn: 'Download Resume',
		},
		about: {
			title: 'About Me',
			body: 'Systems Engineer with experience in web application development and software quality assurance (QA), including Front-End development and test automation as a Junior SDET. Experienced in working with technologies such as Angular, React, Next.js, and TypeScript, as well as designing and executing automated tests using Playwright and the BDD (Behavior-Driven Development) approach. Knowledgeable in databases, Agile methodologies, and CI/CD processes. Additional background in technical support and bilingual customer service, with a B2 level of English proficiency.',
			location_title: 'Location',
			availability_title: 'Availability',
			availability: 'Remote / On-site',
		},
		skills: {
			title: 'Technologies',
		},
		jobs: {
			title: 'Professional Experience',
		},
		languages: {
			title: 'Languages',
		},
		projects: {
			title: 'Projects',
			showMore: 'Show more',
			showLess: 'Show less',
		},
		contact: {
			title: 'Get in touch',
			body: 'Available for full-time software engineering roles and web development projects.',
		},
		quickGuide: {
			message:
				'You can switch between dark/light mode and English/Spanish using the buttons in the top-right corner.',
			dismiss: 'Got it',
		},
	},
	es: {
		resume: 'Curriculum',
		nav: {
			about: 'Sobre mí',
			skills: 'Tecnologías',
			experience: 'Experiencia',
			projects: 'Proyectos',
			contact: 'Contacto',
		},
		hero: {
			role: 'Desarrollador de Software',
			heading: `Hola, soy ${name}.`,
			tagline:
				'Ingeniero en sistemas con experiencia en el desarrollo de aplicaciones web y aseguramiento de calidad de software (QA).',
			cta: 'Ver mi trabajo',
			contact_btn: 'Contáctame',
			resume_btn: 'Descargar Currículum',
		},
		about: {
			title: 'Sobre mí',
			body: 'Ingeniero en Sistemas con experiencia en desarrollo de aplicaciones web y aseguramiento de calidad de software (QA), incluyendo desarrollo Front-End y automatización de pruebas en el rol de SDET Jr. Experiencia trabajando con tecnologías como Angular, React, Next.js y TypeScript, así como en diseño y ejecución de pruebas automatizadas con Playwright bajo el enfoque BDD. Conocimientos en bases de datos, metodologías ágiles y procesos de CI/CD. Trayectoria complementaria en soporte técnico y servicio al cliente bilingüe, con nivel de inglés B2.',
			location_title: 'Ubicación',
			availability_title: 'Disponibilidad',
			availability: 'Remoto / Presencial',
		},
		skills: {
			title: 'Tecnologías',
		},
		jobs: {
			title: 'Experiencia laboral',
		},
		languages: {
			title: 'Idiomas',
		},
		projects: {
			title: 'Proyectos',
			showMore: 'Ver más',
			showLess: 'Ver menos',
		},
		contact: {
			title: 'Contáctame',
			body: 'Disponible para roles a tiempo completo de desarrollo de software y proyectos de desarrollo web.',
		},
		quickGuide: {
			message:
				'Puedes cambiar entre modo oscuro/claro y español/inglés usando los botones en la esquina superior derecha.',
			dismiss: 'Entendido',
		},
	},
};
