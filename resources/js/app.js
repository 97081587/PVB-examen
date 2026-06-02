import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
	title: (title) => `${title} - PVB-examen`,
	resolve: (name) =>
		resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
	setup({ el, App, props }) {
		createRoot(el).render(createElement(App, props));
	},
	progress: {
		color: '#111827',
	},
});
