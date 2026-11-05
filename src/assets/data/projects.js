export const projects = [
	{
		index: 1,
		title: {
			en: 'Academic Management System Modernization',
			es: 'Modernización de Sistema de Gestión Académica',
		},
		description: {
			en: "Technology upgrade and redesign of the university's institutional academic management system.",
			es: 'Actualización tecnológica y rediseño del sistema institucional de gestión académica de la universidad.',
		},
		image: './images/projects/gestion-academica-unah.jpg',
		imageAlt: {
			en: 'Screenshot of the Academic Management System login',
			es: 'Captura de pantalla del login del Sistema de Gestión Académica',
		},
		tags: ['Angular', 'TypeScript', 'Material Design', 'Rest APIs'],
		organization: {
			en: 'Executive Directorate of Technology Management (DEGT) - UNAH',
			es: 'Dirección Ejecutiva de Gestión de Tecnología (DEGT) - UNAH',
		},
		detailed_description: {
			en: 'Migration and modernization of the academic management system (Registro V5), participating in the development and Front-End coordination in Angular for the redesign of user interfaces and the implementation of new functionalities using current web technologies.',
			es: 'Migración y modernización del sistema de gestión académica (Registro V5), participando en el desarrollo y la coordinación del Front-End en Angular para el rediseño de interfaces de usuario y la implementación de nuevas funcionalidades con tecnologías web actuales.',
		},
		bulleted_list: {
			en: [
				'Modular Front-End architecture built around reusable components in Angular 21, maximizing maintainability and visual consistency across all system flows.',
				'Structured with TypeScript under strict typing, dependency injection, and decoupled interfaces to ensure stability and scalability in complex business logic.',
				'Centralized HTTP communication layer via Angular services for REST API consumption, uniform error handling, and optimized asynchronous requests.',
				'Responsive and accessible design system implemented with Material Design.',
				'Performed functional and component testing to validate module behavior and ensure proper functionality before handing off code to the testing team.',
				'Technical coordination and guidance for the Front-End team, issue resolution, and collaborative workflows.',
			],
			es: [
				'Arquitectura Front-End modular orientada a componentes reutilizables en Angular 21, maximizando la mantenibilidad y consistencia visual en todos los flujos del sistema.',
				'Estructuración con TypeScript bajo tipado estricto, inyección de dependencias e interfaces desacopladas para garantizar estabilidad y escalabilidad en lógica de negocio compleja.',
				'Capa de comunicación HTTP centralizada mediante servicios Angular para el consumo de APIs REST, manejo uniforme de errores y optimización de peticiones asíncronas.',
				'Sistema de diseño responsivo y accesible implementado con Material Design.',
				'Ejecución de pruebas funcionales y de componentes para validar el comportamiento de los módulos y garantizar su correcto funcionamiento antes de su entrega al equipo de testing.',
				'Coordinación y orientación técnica del equipo de Front-End, resolución de incidencias y flujos de trabajo colaborativos.',
			],
		},
	},
	{
		index: 2,
		title: {
			en: 'Inventory Management System',
			es: 'Sistema de Inventario',
		},
		description: {
			en: 'Front-End for a web-based inventory management system for the Physics Department, built with React and integrated with a Python and PostgreSQL backend.',
			es: 'Front-End para un sistema web de inventario del Departamento de Física, desarrollado con React e integrado con un backend en Python y PostgreSQL.',
		},
		image: './images/projects/physistock.png',
		imageAlt: {
			en: 'Screenshot of the Inventory Management System login',
			es: 'Captura de pantalla del login del Sistema Gestor de Inventario',
		},
		tags: ['React', 'Python', 'PostgreSQL', 'SCRUM'],
		organization: {
			en: 'Physics Department - UNAH',
			es: 'Departamento de Física - UNAH',
		},
		detailed_description: {
			en: 'Developed the Front-End of a web-based inventory management system for the Physics Department at UNAH. Integrated the React Front-End with Python backend services. Delivered the application for institutional use and future maintenance.',
			es: 'Desarrollo de Front-End para un sistema web de inventario, trabajando bajo una metodología ágil con sprints de dos semanas y utilizando roles SCRUM (Product Owner y Scrum Máster); Integración del Front-End con un backend desarrollado en Python y base de datos PostgreSQL, culminando con la entrega del proyecto al departamento para garantizar su continuidad y futuras mejoras.',
		},
		bulleted_list: {
			en: [
				'Front-End built with ReactJS.',
				'Relational database design using PostgreSQL.',
				'Integration of the Front-End with a backend developed in Python.',
				'SCRUM implementation with two-week sprints.',
				'Requirements gathering and follow-up with the client.',
			],
			es: [
				'Front-End en ReactJS.',
				'Diseño de base de datos relacional usando PostgreSQL.',
				'Integración del Front-End con Backend desarrollado en Python.',
				'Implementación de SCRUM con sprints de dos semanas.',
				'Levantamiento y seguimiento de requisitos con el cliente.',
			],
		},
	},
];
