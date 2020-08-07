import '../node_modules/materialize-css/dist/css/materialize.css'
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;